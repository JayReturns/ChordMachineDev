import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-tile[title][icon1][icon2]',
  templateUrl: './home-tile.component.html',
  styleUrls: ['./home-tile.component.scss']
})
export class HomeTileComponent {

  @Input({required: true}) title!: string;
  @Input({required: true}) icon1!: string;
  @Input({required: true}) icon2!: string;

}
