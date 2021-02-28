import { Component, Input, OnInit } from '@angular/core';
import {CocktailApiService} from '../../service/cocktail-api.service';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.page.html',
  styleUrls: ['./cocktail-item.page.scss'],
})
export class CocktailItemPage implements OnInit {
  drinksFromCertainCategory;
  isDataLoaded;
  @Input() category: string;

  constructor(private cocktailApi: CocktailApiService) { }

  ngOnInit() {
    console.log('this.category', this.category);
    this.cocktailApi.getCocktail(this.category).subscribe(d => {
      this.drinksFromCertainCategory = d[`drinks`];
      this.isDataLoaded = true;
    });
  }

}
