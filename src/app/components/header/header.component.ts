import { Component, Input } from '@angular/core';
import { IAuteur } from 'src/app/interfaces/iauteur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() utilisateur?: IAuteur;
}
