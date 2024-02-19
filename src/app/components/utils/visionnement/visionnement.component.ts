import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visionnement',
  templateUrl: './visionnement.component.html',
  styleUrls: ['./visionnement.component.css'],
})
export class VisionnementComponent {
  @Input() nb_vues: number | undefined = 0;
  @Input() date_publication: string | undefined = '';
  @Input() isShowTooltip: boolean = true;
  @Input() isShowDatePublication: boolean = true;
  @Input() isSmallText: boolean = false;
}
