import {Component, OnInit} from '@angular/core';
import {CocktailApiService} from '../../service/cocktail-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  checkbox;
  constructor(private service: CocktailApiService) { }
  ngOnInit() {
  }
  unChecked(id){
    console.log(id);
    this.service.unChecked(id);
  }
  ionViewDidEnter() {
    this.checkbox = this.service.checkbox;
  }

}
