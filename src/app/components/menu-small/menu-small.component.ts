import { Component } from '@angular/core';
import { LINKS } from 'src/app/mocks/mock-menu';

@Component({
  selector: 'app-menu-small',
  templateUrl: './menu-small.component.html',
  styleUrls: ['./menu-small.component.css'],
})
export class MenuSmallComponent {
  links = LINKS;
}
