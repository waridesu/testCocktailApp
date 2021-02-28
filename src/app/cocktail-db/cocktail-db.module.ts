import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailDBPageRoutingModule } from './cocktail-db-routing.module';

import { CocktailDBPage } from './cocktail-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailDBPageRoutingModule
  ],
  declarations: [CocktailDBPage]
})
export class CocktailDBPageModule {}
