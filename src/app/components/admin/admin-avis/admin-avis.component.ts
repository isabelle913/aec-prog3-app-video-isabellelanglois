import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisService } from 'src/app/services/avis/avis.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { IAvis } from 'src/app/interfaces/iavis';
import { FormulaireAvisComponent } from '../../formulaire-avis/formulaire-avis.component';

@Component({
  selector: 'app-admin-avis',
  templateUrl: './admin-avis.component.html',
  styleUrls: ['./admin-avis.component.css'],
})
export class AdminAvisComponent implements OnInit {
  columnsToDisplay: string[] = [
    'id',
    'id_video',
    'commentaire',
    'note',
    'actions',
  ];

  dataSourceAvis: MatTableDataSource<IAvis> = new MatTableDataSource();

  @ViewChild(MatTable) tableAvis!: MatTable<IAvis>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private avisService: AvisService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAvis.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAvis.paginator) {
      this.dataSourceAvis.paginator.firstPage();
    }
  }

  openFormAvis(avis?: IAvis) {
    const dialogRef = this.dialog.open(FormulaireAvisComponent, {
      data: avis,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        this.getAvis();
      }
    });
  }

  getAvis(): void {
    this.avisService.getAvis().subscribe((response) => {
      this.dataSourceAvis = new MatTableDataSource(response);
      this.dataSourceAvis.paginator = this.paginator;
      this.dataSourceAvis.sort = this.sort;
      this.tableAvis.renderRows();
    });
  }

  openFullVideo(id_video: number) {
    this.router.navigate(['/', 'video', id_video]);
  }

  deleteAvis(id: number) {
    this.avisService.deleteAvis(id).subscribe((_) => {
      this.getAvis();
      this._snackBar.open('Avis supprimé!', undefined, {
        duration: 2000,
      });
    });
  }

  ngOnInit(): void {
    this.getAvis();
  }
}
