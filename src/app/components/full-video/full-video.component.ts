import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVideo } from 'src/app/interfaces/ivideo';
import { VideoService } from 'src/app/services/video/video.service';
import { AvisService } from 'src/app/services/avis/avis.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormulaireAvisComponent } from '../formulaire-avis/formulaire-avis.component';
import { IAvis } from 'src/app/interfaces/iavis';

@Component({
  selector: 'app-full-video',
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css'],
})
export class FullVideoComponent {
  video: IVideo | undefined;
  mediaDefaut = '../../../assets/logo_300-170.png';
  avis: IAvis = {
    id: 0,
    id_video: 0,
    note: 0,
    commentaire: '',
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private videoService: VideoService,
    private avisService: AvisService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getOneVideo();
  }
  goBack(): void {
    this.location.back();
  }

  getOneVideo(): void {
    const id: number | null = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) return;
    this.avis.id_video = id;

    this.videoService.getOneVideo(id).subscribe((response) => {
      if (!response) return;
      this.video = response;
      this.getAvisOneVideo(this.video.id);
    });
  }
  getAvisOneVideo(id_video: number) {
    this.avisService.getAvisOneVideo(id_video).subscribe((response) => {
      if (typeof response === 'string') return;
      if (response && this.video) this.video.avis = response;
    });
  }
  openFormAvis() {
    const dialogRef = this.dialog.open(FormulaireAvisComponent, {
      data: this.avis,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        if (this.video) this.getAvisOneVideo(this.video.id);
      }
    });
  }
}
