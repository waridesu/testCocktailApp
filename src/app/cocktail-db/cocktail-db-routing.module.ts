import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailDBPage } from './cocktail-db.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailDBPage
  },
  {
    path: 'cocktail-item',
    loadChildren: () => import('./cocktail-item/cocktail-item.module').then(m => m.CocktailItemPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then(m => m.FiltersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailDBPageRoutingModule {}
