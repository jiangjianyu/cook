import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Food } from '../eneity/ResponDish';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-method',
  templateUrl: './foodMethod.component.html',
  styleUrls: ['./foodMethod.component.css'],
})
export class FoodMethodComponent implements OnInit {

  @Input() food: Food;
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private location: Location) { }

  ngOnInit() {
    this.getFood();
  }
  getFood(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('----------------'+id+'------------');
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }
}
