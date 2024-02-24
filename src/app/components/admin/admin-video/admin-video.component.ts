import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video/video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireVideoComponent } from '../../formulaire-video/formulaire-video.component';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AvisService } from 'src/app/services/avis/avis.service';

@Component({
  selector: 'app-admin-video',
  templateUrl: './admin-video.component.html',
  styleUrls: ['./admin-video.component.css'],
})
export class AdminVideoComponent implements OnInit {
  columnsToDisplay: string[] = [
    'id',
    'nom',
    'code',
    'date_publication',
    'duree',
    'score',
    'actions',
  ];
  dataSourceVideos: MatTableDataSource<IVideo> = new MatTableDataSource();

  @ViewChild(MatTable) tableVideos!: MatTable<IVideo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private videoService: VideoService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private avisService: AvisService
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVideos.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVideos.paginator) {
      this.dataSourceVideos.paginator.firstPage();
    }
  }

  openFormVideo(video?: IVideo) {
    const dialogRef = this.dialog.open(FormulaireVideoComponent, {
      data: video,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        this.getVideos();
      }
    });
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      this.dataSourceVideos = new MatTableDataSource(response);
      this.dataSourceVideos.paginator = this.paginator;
      this.dataSourceVideos.sort = this.sort;
      this.tableVideos.renderRows();
    });
  }

  openFullVideo(id: number) {
    this.router.navigate(['/', 'video', id]);
  }

  deleteVideo(id: number) {
    this.avisService.getAvisOneVideo(id).subscribe((response) => {
      if (response.length > 0 && typeof response !== 'string') {
        this._snackBar.open('Supprimer les avis avant!!', undefined, {
          duration: 4000,
        });
      } else {
        this.videoService.deleteVideo(id).subscribe((_) => {
          this.getVideos();
          this._snackBar.open('Vidéo supprimé!', undefined, {
            duration: 2000,
          });
        });
      }
    });
  }

  ngOnInit(): void {
    this.getVideos();
  }
}
