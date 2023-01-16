import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model'
@Injectable()
export class RecipeService {
  
  @Output() recipe_selected = new EventEmitter<Recipe>()

  private recipe_list: Recipe[] = [
    new Recipe("Dawn",
    "A weird pizza",
    "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
    [new Ingredient('Tomato',1),
    new Ingredient('Chicken',1),
    new Ingredient('Cheese',1)]),
    new Recipe("Dawn2",
    "A weird pizza2",
    "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
    [new Ingredient('Pineapple',1),
    new Ingredient('Fish',1),
    new Ingredient('Cheese',1)])
  ];
  
  getRecipes(){
    return this.recipe_list.slice();
    //This will just return a copy using slice(). So the recipe_list can't be accessed else where.
  }

  constructor() {}
}
