import { Injectable, Output, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  @Output() recipe_selected = new EventEmitter<Recipe>()

  private recipe_list: Recipe[] = [
    new Recipe("Dawn","A weird pizza","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"),
    new Recipe("Dawn2","A weird pizza2","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"),
    new Recipe("Dawn3","A weird pizza3","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900")

  ];
  
  getRecipes(){
    return this.recipe_list.slice();
    //This will just return a copy using slice(). So the recipe_list can't be accessed else where.
  }

  constructor() {}
}
