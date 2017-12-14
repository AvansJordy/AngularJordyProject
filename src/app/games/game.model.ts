//
// Domain class
//

import {Platform} from '../shared/platform.model';
import {Character} from '../shared/character.model';
export class Game {

  private id: string;
  private _title: string;
  private _genre: string;
  private _description: string;
  private _characters: [object];
  private _imagePath: string;
  private _platforms: Platform[];
  private _developer: string;
  private _publisher: string;
  private _releaseYear: number;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  public get _id(): string {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get title(): string {
    return this._title;
  }

  public set title(t: string) {
    this._title = t;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(g: string) {
    this._genre = g;
  }

  public get description(): string {
    return this._description;
  }

  public set description(d: string) {
    this._description = d;
  }

  public get characters() {
    return this._characters;
  }

  public set characters(n: [object]) {
    this._characters = n;
  }

  public get imagePath(): string {
    return this._imagePath;
  }

  public set imagePath(i: string) {
    this._imagePath = i;
  }

  public get platforms(): Platform[] {
    return this._platforms;
  }

  public set platforms(p: Platform[]) {
    this._platforms = p;
  }

  public get developer(): string {
  return this._developer;
}

  public set developer(d: string) {
    this._developer = d;
  }

  public get publisher(): string {
  return this._publisher;
}

  public set publisher(p: string) {
    this._publisher = p;
  }

  public get releaseYear(): number {
    return this._releaseYear;
  }

  public set releaseYear(y: number) {
    this._releaseYear = y;
  }



}
