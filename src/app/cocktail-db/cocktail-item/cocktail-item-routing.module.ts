import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailItemPage } from './cocktail-item.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailItemPageRoutingModule {}
