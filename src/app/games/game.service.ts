import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Game} from './game.model';
import {Gamecharacter} from "./gamecharacter.model";

@Injectable()
export class GameService {
  gameChanged = new Subject<Game[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/games/';
  private serverNeoUrl = environment.serverUrl +'/gamesrel/';

  private games: Game[];
  private characters: Gamecharacter[];

  constructor(private http: Http) {

  }

  getGames() {
    console.log('getGames');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.games = response.json() as Game[];
        return response.json() as Game[];
      })
      .catch(error => {
        return error;
      });


  }

  getGame(index: string) {
    if (index == null)
      return null;
    return this.http.get(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error)
        return error;
      });
  }

  getGamesRel(genre: String) {
    return this.http.get(this.serverNeoUrl + genre, {headers: this.headers})
      .toPromise()
      .then(response => {
        // this.series = response.json() as Serie[];
        return response.json() as Game[];
      })
      .catch(error => {
        return error;
      });


  }

  getCharacters() {
    return this.http.get(environment.serverUrlCharacter, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.characters = response.json() as Gamecharacter[];
        return response.json() as Gamecharacter[];
      })
      .catch(error => {
        return error;
      });

  }

  getCharacter(index: string) {
    if (index == null)
      return null;
    return this.http.get(environment.serverUrlCharacter + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error)
        return error;
      });
  }

  addCharacter(id: string, char: Gamecharacter, game: Game) {
    console.log('addChar')

    return this.http.post(environment.serverUrlCharacter, char, {headers: this.headers})
      .toPromise()
      .then(response => {

        return response.json() as Gamecharacter;
      })
      .catch(error => {
        return error;
      });
  }


  addGame(game: Game) {
    return this.http.post(this.serverUrl, game, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.gameChanged.next(this.games);
      });
  }

  updateGame(index: string, newGame: Game) {
    return this.http.put(this.serverUrl + index, newGame, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.gameChanged.next(this.games);
      });
  }

  updateCharacter(id: string, newChar: Gamecharacter) {
    console.log('update');
    return this.http.put(environment.serverUrlCharacter + id, newChar, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.gameChanged.next(this.games);
      });
  }

  deleteGame(index: string) {
    return this.http.delete(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.gameChanged.next(this.games.slice());
      });
  }

  deleteCharacter(id: string) {
    return this.http.delete(environment.serverUrlCharacter + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.gameChanged.next(this.games.slice());
      });
  }

}
