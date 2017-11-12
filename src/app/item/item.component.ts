import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

import { ResponItem, Item } from '../eneity/ResponItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  responItem: ResponItem;
  constructor(private itemService: ItemService) {
    this.getItems();
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  getItems(): void {
    this.itemService.getItems().subscribe(responItem => this.responItem = responItem);

  }

  ngOnInit() {

  }

}
