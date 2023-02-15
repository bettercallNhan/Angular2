import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-card2',
  templateUrl: './items-card2.component.html',
  styleUrls: ['./items-card2.component.scss']
})
export class ItemsCard2Component {
  @Input()
  item_cart : any;
}
