import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailItemPageRoutingModule } from './cocktail-item-routing.module';

import { CocktailItemPage } from './cocktail-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailItemPageRoutingModule
  ],
  declarations: [CocktailItemPage]
})
export class CocktailItemPageModule {}
