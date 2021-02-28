import {Component, OnInit} from '@angular/core';
import {CocktailApiService} from '../../service/cocktail-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  filters;
  constructor(private service: CocktailApiService) { }
  ngOnInit() {
  }
  toggleCheckbox(id){
    console.log(id);
    this.service.toggleCheckbox(id);
  }
  saveChanges() {
    this.service.apply();
  }
  ionViewDidEnter() {
    this.filters = this.service.copyFilters;
  }

}
