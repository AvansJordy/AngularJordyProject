import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = new Game({imagePath: ''});
  id: string;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.gameService.getGame(this.id).then(res => {
            this.game = res;
          });
        }
      );
  }

  onEditGame() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onEditCharacter() {
    this.router.navigate([':id/:charid'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }


  onDeleteGame() {
    this.gameService.deleteGame(this.id);
    this.router.navigate(['/games']);
  }

}
