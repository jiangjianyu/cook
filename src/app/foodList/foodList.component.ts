import { Component, OnInit, Input, HostListener, AfterContentInit} from '@angular/core';

import { FoodService } from '../service/food.service';
import { ResponDish, Dishes } from '../eneity/ResponDish';

@Component({
  selector: 'app-food-list',
  templateUrl: './foodList.component.html',
  styleUrls: ['./foodList.component.css']
})
export class FoodListComponent implements OnInit, AfterContentInit {
  @Input() dishes: Dishes[];
  @Input('q') q: string;
  @Input('id') id: string;
  start: number = 10;
  responDish: ResponDish;

  constructor(private foodService: FoodService) { }

  ngOnInit() { }
  ngAfterContentInit() {
    
    this.onWindowScroll();
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      if (this.id) {
        this.foodService.getFoodListByCid(this.id, this.start).subscribe(result => this.responDish = result);
        this.dishes = this.dishes.concat(this.responDish.result.list);
        this.start = this.start + 5;
      }
      if (this.q) {
        this.foodService.getFoodListByKey(this.q, this.start).subscribe(result => this.responDish = result);
        this.dishes = this.dishes.concat(this.responDish.result.list);
        this.start = this.start + 5;
      }
    };
  }
}

