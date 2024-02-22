import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAvis } from 'src/app/interfaces/iavis';
import { AvisService } from 'src/app/services/avis/avis.service';

@Component({
  selector: 'app-formulaire-avis',
  templateUrl: './formulaire-avis.component.html',
  styleUrls: ['./formulaire-avis.component.css'],
})
export class FormulaireAvisComponent {
  avis: IAvis = {
    id: 0,
    id_video: 0,
    note: 0,
    commentaire: '',
  };

  constructor(
    private avisService: AvisService,
    private dialogRef: MatDialogRef<FormulaireAvisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAvis
  ) {
    if (data) {
      this.avis = data;
    }
  }
  addAvis(avisForm: NgForm) {
    console.log('addAvis', avisForm);
    if (avisForm.valid) {
      this.avisService.addAvis(this.avis).subscribe((_) => {
        avisForm.resetForm();
        this.dialogRef.close('Avis ajouté!');
      });
    }
  }
  updateAvis(avisForm: NgForm) {
    console.log('addAvis', avisForm);
    if (avisForm.valid) {
      this.avisService.updateAvis(this.avis).subscribe((_) => {
        avisForm.resetForm();
        this.dialogRef.close('Avis modifié!');
      });
    }
  }
  annuler() {
    this.dialogRef.close();
  }
}
// ajouter un avis d'admin -> id sera nouveau +  id_video sera à inscrire
// ajouter un avis du full vidéo -> id_video sera fourni
// Modifié un avis
