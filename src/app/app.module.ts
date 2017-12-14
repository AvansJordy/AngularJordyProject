import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import {Game} from "./games/game.model";
import {GamesComponent} from "./games/games.component";
import {GameDetailComponent} from "./games/game-detail/game-detail.component";
import {GameItemComponent} from "./games/game-list/game-item/game-item.component";
import {GameStartComponent} from "./games/game-start/game-start.component";
import {GameEditComponent} from "./games/game-edit/game-edit.component";
import {GameListComponent} from "./games/game-list/game-list.component";
import {GameService} from "./games/game.service";
import {DetailedGamesComponent} from "./detailedgames/detailed.component";
import {CharacterDetailComponent} from "./character/character-detail/character-detail.component";
import {CharacterItemComponent} from "./character/character-item/character-item.component";
import {FilterPipe} from "./games/game-list/filter.pipe";
import { GenrefilterPipe } from './games/game-list/genrefilter.pipe';
import { DeveloperfilterPipe } from './games/game-list/developerfilter.pipe';
import {CharacterAddComponent} from "./games/character-add/character-add.component";
import {RelGameItemComponent} from "./detailedgames/game-rel-item/game-rel-item.component";
import {IfnotDirective} from "./directiveCustom";







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    GamesComponent,
    GameListComponent,
    GameDetailComponent,
    GameItemComponent,
    GameStartComponent,
    GameEditComponent,

    DropdownDirective,

    DetailedGamesComponent,


    CharacterDetailComponent,
    CharacterItemComponent,
    FilterPipe,
    GenrefilterPipe,
    DeveloperfilterPipe,

    CharacterAddComponent,

    RelGameItemComponent,

    IfnotDirective




  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
