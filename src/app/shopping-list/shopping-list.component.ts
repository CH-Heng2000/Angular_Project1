import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  constructor(){
    this.ingredients.push(new Ingredient('Apple', 5));
    this.ingredients.push(new Ingredient('Tomato', 10));
  }
}
