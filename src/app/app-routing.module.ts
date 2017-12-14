import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GamesComponent} from "./games/games.component";
import {GameStartComponent} from "./games/game-start/game-start.component";
import {GameEditComponent} from "./games/game-edit/game-edit.component";
import {GameDetailComponent} from "./games/game-detail/game-detail.component";
import {DetailedGamesComponent} from "./detailedgames/detailed.component";
import {CharacterDetailComponent} from "./character/character-detail/character-detail.component";
import {CharacterAddComponent} from "./games/character-add/character-add.component";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent },
  // ] },
  // { path: 'shopping-list', component: ShoppingListComponent },

  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, children: [
    { path: '', component: GameStartComponent },
    { path: 'new', component: GameEditComponent },
    { path: ':id', component: GameDetailComponent },
    { path: ':id/edit', component: GameEditComponent },
    {path: 'editChar/:id', component: CharacterAddComponent},
    {path: 'editChar/:id/:charid', component: CharacterAddComponent}
  ] },


  {path: 'detailgames/:id', component: DetailedGamesComponent, children: [
    {path: '', component: GameStartComponent},
    {path: ':name', component: CharacterDetailComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
