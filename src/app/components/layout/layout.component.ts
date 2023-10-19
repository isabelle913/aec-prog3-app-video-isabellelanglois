// import { Component } from '@angular/core';
// import { BreakpointObserver } from '@angular/cdk/layout';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.css'],
// })
// export class LayoutComponent {
//   isSmallScreen = false;
//   isLargeScreen = false;

//   drawerToggle = false;

//   /*
//   TODO ?? question pour avoir valeur réactive autre qu'installer une librairie
//   // petit menu si drawerToggle = false et  isSmallScreen = false
//   // tentative 1
//   // isSmallMenuOpen = !this.drawerToggle && !this.isSmallScreen ? true : false;
//   // tentative 2
//   // https://stackoverflow.com/questions/43710642/does-angular-have-the-computed-property-feature-like-in-vue-js
//   // hasSmallMenuOpen() {
//   //   return !this.drawerToggle && !this.isSmallScreen ? true : false;
//   // }
// */
//   onToggleDrawer() {
//     this.drawerToggle = !this.drawerToggle;
//   }

//   constructor(private observer: BreakpointObserver) {
//     this.observer
//       .observe(['(max-width: 640px)', '(min-width: 1280px)'])
//       .subscribe((result) => {
//         this.isSmallScreen = result.breakpoints['(max-width: 640px)'];
//         this.isLargeScreen = result.breakpoints['(min-width: 1280px)'];
//       });
//   }
//   // https://medium.com/@pjlamb12/angular-cdks-breakpointobserver-b75df04a1cc2
// }