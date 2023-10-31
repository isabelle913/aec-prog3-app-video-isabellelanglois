import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-small-video',
  templateUrl: './small-video.component.html',
  styleUrls: ['./small-video.component.css'],
})
export class SmallVideoComponent {
  @Input() video?: IVideo;
  mediaDefaut = '../../../assets/logo_300-170.png';
  imgCitron =
    'https://www.arnaques-infos.org/images/pixabay-bb4f3cce9a2f4650_l7y9x3p4.png';
  imgStar = '../../../assets/star-70x72.png';
  // isHidden =
  //   this.video?.score && this.video?.score > -4999 && this.video?.score < 4999
  //     ? true
  //     : false;
  // isHidden = this.video?.score ? true : false;
  // isHidden = true;

  // isStarActive = this.video?.score
  //   ? this.video?.score > 4999
  //     ? true
  //     : false
  //   : false;
  // isStarActive = this.video?.score ? true : false; => ca donne false

  // isCitrusActive = this.video?.score
  //   ? this.video?.score < -4999
  //     ? true
  //     : false
  //   : false;
  // TODO ?? gérer  les condition avec variable possiblement undefined
  isStarActive() {
    if (this.video?.score) {
      return this.video.score > 4999 ? true : false;
    }
    return false;
  }
  isCitrusActive() {
    if (this.video?.score) {
      return this.video.score < -4999 ? true : false;
    }
    return false;
  }

  constructor(private router: Router) {}

  goTo() {
    if (this.video) {
      this.router.navigate(['/', 'video', this.video.code]);
    }
  }
}
