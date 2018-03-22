import { Component, OnInit } from '@angular/core';

import { ResponDish } from '../eneity/ResponDish';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent implements OnInit {
  responDish: ResponDish;
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getNiceFood().subscribe(result => this.responDish = result);
  }

}
