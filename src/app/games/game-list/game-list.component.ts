import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  games: Game[];
  subscription: Subscription;
  filteredStatus = '';
  filteredGenre = '';
  filteredPublisher = '';

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.gameService.gameChanged
      .subscribe(
        (games: Game[]) => {
          this.gameService.getGames()
            .then(res => {
              this.games = res;
            });
        }
      );
    this.gameService.getGames().then(res => {
      this.games = res;
    });
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onGenre() {
  //   this.router.navigate(['/genre/' + this.game.genre], {relativeTo: this.route});
  //   // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
