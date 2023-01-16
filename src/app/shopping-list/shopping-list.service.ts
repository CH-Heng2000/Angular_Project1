import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomato', 10)];
  @Output() newIngredientEmit = new EventEmitter<Ingredient[]>()

  constructor() {}

  addIngredient(ing : Ingredient){
    this.ingredients.push(ing);
    this.newIngredientEmit.emit(this.ingredients.slice());
  }

  getShoppingList() : Ingredient[]{
    return this.ingredients.slice();
  }
}
