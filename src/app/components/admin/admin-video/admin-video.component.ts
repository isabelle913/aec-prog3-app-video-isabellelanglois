import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from 'src/app/services/video/video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireVideoComponent } from '../../formulaire-video/formulaire-video.component';
import { IVideo } from 'src/app/interfaces/ivideo';

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
    private router: Router
  ) {}

  // functions
  openFormVideo(video?: IVideo) {
    console.log(video);

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
  openFullVideo(id: number) {
    console.log('id', id, typeof id);
    this.router.navigate(['/', 'video', id]);
  }
  ngOnInit(): void {
    this.getVideos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVideos.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVideos.paginator) {
      this.dataSourceVideos.paginator.firstPage();
    }
  }
  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      // this.videos = response;

      this.dataSourceVideos = new MatTableDataSource(response);
      this.dataSourceVideos.paginator = this.paginator;
      this.dataSourceVideos.sort = this.sort;
      this.tableVideos.renderRows();
    });
  }
  deleteVideo(id: number) {
    console.log('delete', id);
    this.videoService.deleteVideo(id).subscribe((_) => {
      this.getVideos();
      this._snackBar.open('Vidéo supprimé!', undefined, {
        duration: 2000,
      });
    });
  }
}
