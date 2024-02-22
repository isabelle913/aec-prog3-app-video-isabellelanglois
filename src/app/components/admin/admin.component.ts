import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormulaireVideoComponent } from '../formulaire-video/formulaire-video.component';
import { FormulaireAvisComponent } from '../formulaire-avis/formulaire-avis.component';
import { AdminVideoComponent } from './admin-video/admin-video.component';
import { AdminAvisComponent } from './admin-avis/admin-avis.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  tab = 'video';

  @ViewChild(AdminVideoComponent) AdminVideoComponent:
    | { getVideos: () => void }
    | undefined;

  @ViewChild(AdminAvisComponent) AdminAvisComponent:
    | { getAvis: any }
    | undefined;

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  onChangetab(tab: string) {
    this.tab = tab;
  }

  getClassTab(actualTab: string) {
    if (actualTab === this.tab)
      return 'w-[100px] text-2xl py-4 text-center border-b-4 border-blue-500 cursor-pointer';
    return 'w-[100px] text-2xl py-4 text-center hover:border-b-4 hover:border-gray-200 cursor-pointer';
  }

  openFormVideo() {
    const dialogRef = this.dialog.open(FormulaireVideoComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        this.AdminVideoComponent?.getVideos();
      }
    });
  }

  openFormAvis() {
    const dialogRef = this.dialog.open(FormulaireAvisComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        this.AdminAvisComponent?.getAvis();
      }
    });
  }
}
