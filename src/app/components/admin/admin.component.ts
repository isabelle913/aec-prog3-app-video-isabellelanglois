import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormulaireVideoComponent } from '../formulaire-video/formulaire-video.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  // OK
  openFormVideo() {
    const dialogRef = this.dialog.open(FormulaireVideoComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this._snackBar.open(response, undefined, { duration: 2000 });
        // this.getVideos();  // TODO comment rafraichir page
      }
    });
  }
}
