import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Router } from '@angular/router/src/router';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { RecommendComponent } from './recommend/recommend.component';
import { FoodListComponent } from './foodList/foodList.component';

import { ItemService } from './service/item.service';
import { FoodService } from './service/food.service';
import { FoodDetailComponent } from './foodDetail/foodDetail.component';
import { FoodMethodComponent } from './foodMethod/foodMethod.component';

const appRoutes: Routes = [
  { path: '',  component: RecommendComponent },
  { path: 'recommend', component: RecommendComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'item', component: ItemComponent },
  { path: 'food/detail/:id', component: FoodDetailComponent },
  { path: 'food/method/:id', component: FoodMethodComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ItemComponent,
    RecommendComponent,
    FoodListComponent,
    FoodDetailComponent,
    FoodMethodComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService,
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
