import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVideo } from 'src/app/interfaces/ivideo';
import { VIDEOS } from 'src/app/mocks/mock-videos';
import { VideoService } from 'src/app/services/video.service';
import { AvisService } from 'src/app/services/avis/avis.service';

@Component({
  selector: 'app-full-video',
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css'],
})
export class FullVideoComponent {
  video: IVideo | undefined;
  mediaDefaut = '../../../assets/logo_300-170.png';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private videoService: VideoService,
    private avisService: AvisService
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

    this.videoService.getOneVideo(id).subscribe((response) => {
      if (!response) return;
      this.video = response;
      console.log('Video', this.video);
      this.getAvisOneVideo(this.video.id);
    });
  }
  getAvisOneVideo(id_video: number) {
    this.avisService.getAvisOneVideo(id_video).subscribe((response) => {
      console.log(response);
      if (response && this.video) this.video.avis = response;
      console.log('Video', this.video);
    });
  }
}

// <!-- TODO vérifier pour que le nb_vues soit celui reçu du serveur soit utilisé -->
// <!-- TODO idem pour le score soit celui reçu du serveur soit utilisé -->
