import {Component} from '@angular/core';
import {CocktailApiService} from '../service/cocktail-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cocktail-db',
  templateUrl: './cocktail-db.page.html',
  styleUrls: ['./cocktail-db.page.scss'],
})
export class CocktailDBPage {
  drinks;
  filters;

  constructor(private cocktailApi: CocktailApiService, private router: Router) {
  }

  goToFilters() {
    this.router.navigate(['cocktail-db/filters']);
  }
  ionViewDidEnter() {
    this.filters = this.cocktailApi.getCheckbox();
  }
}
