import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {
  checkbox = [
    {id: '1', val: 'Ordinary Drink', isChecked: true },
    {id: '2', val: 'Cocktail', isChecked: true },
    {id: '3', val: 'Milk/Float/Shake', isChecked: true },
    {id: '4', val: 'Other/Unknown', isChecked: true },
    {id: '5', val: 'Cocoa', isChecked: true },
    {id: '6', val: 'Shot', isChecked: true },
    {id: '7', val: 'Coffee/Tea', isChecked: true },
    {id: '8', val: 'Homemade Liqueur', isChecked: true },
    {id: '9', val: 'Beer', isChecked: true },
  ];
  constructor(private http: HttpClient) { }
  getCocktail(drink){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`);
  }
  unChecked(id: string){
    // find for id
    if (id === this.checkbox[id]){
      // toggle isChecked
      // this.form.isChecked: !true
    }
  }
}
