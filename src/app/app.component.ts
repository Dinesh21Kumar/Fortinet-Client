import { Component } from '@angular/core';
import { ChennelService } from './chennel.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fortinet';
  resList: any = [];
  catList: any = [];
  resCount: number = 0;
  searchText: string = undefined;
  restaurantName: string = undefined;
  heading: string = 'Restaurants';

  constructor(public channelservice: ChennelService) { }

  ngOnInit() {
    var url = environment.baseUrl + '/restaurants/list';
    this.getRestaurants(url);
    var categoryUrl = environment.baseUrl+ '/restaurants/categories/list';
    this.getRestaurantCategories(categoryUrl);

  }


  getRestaurants(url) {
    this.heading = "Restaurants";
    this.channelservice.doGET(url).subscribe(
      suc => {
        console.log("RESTAURANTS", suc);
        this.resList = suc;
        this.resCount = this.resList.length;
      },
      err => {
        console.log("err", err);
      }
    )
  }
  getRestaurantCategories(url) {
    this.channelservice.doGET(url).subscribe(
      suc => {
        console.log("categories", suc);
        this.catList = suc;
      },
      err => {
        console.log("err", err);
      }
    )
  }

  getCurrency(currency) {
    return currency.split("(")[1].split(')')[0];
  }
  getRatingColor(color) {
    console.log(color);
    return color;
  }

  setFilter(catName, count) {
    this.searchText = catName;
    this.resCount = count;
    this.heading = 'Restaurants ' + '(' + this.resCount + ')';
  }

  removeFilters() {
    this.searchText = undefined;
    this.restaurantName = undefined;
    this.resCount = 0;
    var url = environment.baseUrl + '/restaurants/list';
    this.getRestaurants(url);
  }

  openOnMaps(name, long, lat) {
    var mapUrl = "https://www.google.com/maps/search/" + name + "/@" + long + "," + lat + ",15z";
    window.open(mapUrl, "_blank");
  }
}
