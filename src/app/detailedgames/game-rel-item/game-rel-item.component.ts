import {Component, OnInit, Input} from '@angular/core';
import {Game} from "../../games/game.model";

@Component({
  selector: 'app-rel-game-item',
  templateUrl: './game-rel-item.component.html',
  styleUrls: ['./game-rel-item.component.css']
})
export class RelGameItemComponent implements OnInit {

  @Input() gameRel: Game;

  constructor() { }

  ngOnInit() {

  }

}
