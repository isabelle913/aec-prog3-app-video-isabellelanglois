import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  showFiller = false;
  isSmallMenu = true; //button toggle
  isSmallMenuVisible = true; // breakpoint
  // grand écran true -> petit menu toujours présent
  // grand écran false -> menu complet pousse
  // moyen écran true -> petit menu toujours présent
  // moyen écran false -> menu complet passe par dessus
  // petit écran true -> rien
  // petit écran false -> menu complet passe par dessus

  /*
  TODO ?? Breakpoint
  https://material.angular.io/cdk/layout/overview

  destroyed = new Subject<void>();
  currentScreenSize: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
 */

  /* https://coreui.io/angular/docs/layout/breakpoints*/
}
