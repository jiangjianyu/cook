import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common/';

import { ResponDish } from '../eneity/ResponDish';
import { FoodService } from '../service/food.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  responDish: ResponDish;
  q:string;
  id:string;

  constructor(private foodService: FoodService, private route: ActivatedRoute, private location: Location) { }

  onEnter(q: string) {
    this.q = q;
    this.foodService.getFoodListByKey(q,0).subscribe(result => this.responDish = result);
  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.foodService.getFoodListByCid(this.id,0).subscribe(result => this.responDish = result);
  }
 
}
