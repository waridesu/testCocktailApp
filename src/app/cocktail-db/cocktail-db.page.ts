import { Component, OnInit } from '@angular/core';
import {CocktailApiService} from '../service/cocktail-api.service';

@Component({
  selector: 'app-cocktail-db',
  templateUrl: './cocktail-db.page.html',
  styleUrls: ['./cocktail-db.page.scss'],
})
export class CocktailDBPage implements OnInit {
  drinks;

  constructor(private cocktailApi: CocktailApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.cocktailApi.getCocktail('Ordinary Drink').subscribe(d => {
      console.log(d);
      this.drinks = d[`drinks`];
    });
  }
}
