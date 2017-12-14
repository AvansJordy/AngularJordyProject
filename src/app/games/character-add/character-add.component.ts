import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {Gamecharacter} from "../gamecharacter.model";
import {Game} from "../game.model";
import {GameService} from "../game.service";

@Component({
  selector: 'app-add-character',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {
  id: string;
  idChar: string;
  edit = false;
  game: Game;
  characters: Gamecharacter;
  characterRes: Gamecharacter;
  charForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.idChar = params['charid'];
      this.edit = params['charid'] != null;
      console.log(this.edit);
      this.initForm();
      this.gameService.getGame(this.id)
        .then(games => this.game = games);

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log(this.charForm.value);
      this.router.navigate(['detailgames/' + this.id]);
      this.gameService.updateCharacter(this.idChar, this.charForm.value);
    } else {
      this.gameService.addCharacter(this.idChar, this.charForm.value, this.game)
        .then(res =>
          this.game.characters.push({'_id': res._id})
        )
        .then(() => this.gameService.updateGame(this.id, this.game));
      this.router.navigate(['games/' + this.id]);
    }
  }

  onCancel() {
    this.router.navigate(['/detailgames/' + this.id]);
  }

  private initForm() {

    if (this.edit) {
      this.gameService.getCharacter(this.idChar).then((res) => console.log(res));
      this.gameService.getCharacter(this.idChar)
        .then(char => {
          this.characters = char;

          this.charForm = new FormGroup({
            'name': new FormControl(this.characters.name, Validators.required),
            'imagePath': new FormControl(this.characters.imagePath, Validators.required)
          });
        });


    }


    this.charForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagePath': new FormControl('', Validators.required)
    });
  }


}
