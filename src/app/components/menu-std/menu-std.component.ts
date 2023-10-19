import { Component, Input } from '@angular/core';
import { LINKS } from 'src/app/mocks/mock-menu';

@Component({
  selector: 'app-menu-std',
  templateUrl: './menu-std.component.html',
  styleUrls: ['./menu-std.component.css'],
})
export class MenuStdComponent {
  links = LINKS;
}
