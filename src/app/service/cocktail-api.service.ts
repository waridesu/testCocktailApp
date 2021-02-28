import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {
  filters = {
    'Ordinary Drink': true,
    Cocktail: true,
    Cocoa: true,
    Beer: true,
  };
  copyFilters = {
    ...this.filters
  };

  constructor(private http: HttpClient) {
  }

  getCocktail(drink: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`);
  }
  getCheckbox() {
    return this.filters;
  }
  toggleCheckbox(value: string){
    this.copyFilters[value] = !this.copyFilters[value];
  }
  apply() {
    this.filters = {...this.copyFilters};
  }
}
