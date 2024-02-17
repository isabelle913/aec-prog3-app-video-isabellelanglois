import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/services/avis/avis.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { IAvis } from 'src/app/interfaces/iavis';

// TODO faire un formulaire pour les avis
// TODO mettre un lien vers la page admin dans les formulaires
// TODO mettre dans le full video une place pour ajouter un avis

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

  ngOnInit(): void {
    this.getAvis();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAvis.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAvis.paginator) {
      this.dataSourceAvis.paginator.firstPage();
    }
  }
  getAvis(): void {
    this.avisService.getAvis().subscribe((response) => {
      this.dataSourceAvis = new MatTableDataSource(response);
      this.dataSourceAvis.paginator = this.paginator;
      this.dataSourceAvis.sort = this.sort;
      this.tableAvis.renderRows();
    });
  }
  openFormAvis(avis?: IAvis) {
    // TODO modifier
    console.log(avis);
  }
  openFullVideo(id_video: number) {
    // TODO modifier
    console.log(id_video);
  }

  deleteAvis(id: number) {
    console.log('delete', id);
    this.avisService.deleteAvis(id).subscribe((_) => {
      this.getAvis();
      this._snackBar.open('Avis supprimé!', undefined, {
        duration: 2000,
      });
    });
  }
}
