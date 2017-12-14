import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../shared/character.model";



@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  @Input() gameId: string;
  constructor() { }

  ngOnInit() {
  }
}
