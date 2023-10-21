import { Component, Input } from '@angular/core';
import { IAuteur } from 'src/app/interfaces/iauteur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent {
  @Input() utilisateur?: IAuteur;

  avatar = this.utilisateur?.avatar || 'https://picsum.photos/id/40/40/40';
  avatarAlt = this.utilisateur?.auteurNom
    ? `Avatar de ${this.utilisateur?.auteurNom}`
    : 'Avatar';
}
// TODO changer pour recevoir nom et ... pourrait être pour un utilisateur
