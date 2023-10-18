import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  showFiller = false;

  isSmallScreen = false;
  isLargeScreen = false;

  constructor(private observer: BreakpointObserver) {
    this.observer
      .observe(['(max-width: 640px)', '(min-width: 1280px)'])
      .subscribe((result) => {
        this.isSmallScreen = result.breakpoints['(max-width: 640px)'];
        this.isLargeScreen = result.breakpoints['(min-width: 1280px)'];
      });
  }
  // https://medium.com/@pjlamb12/angular-cdks-breakpointobserver-b75df04a1cc2

  // grand écran true -> petit menu toujours présent
  // grand écran false -> menu complet pousse
  // moyen écran true -> petit menu toujours présent
  // moyen écran false -> menu complet passe par dessus
  // petit écran true -> rien
  // petit écran false -> menu complet passe par dessus
}
