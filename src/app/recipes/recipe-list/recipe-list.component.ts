import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {

  recipe_list: Recipe[] = [];
  @Output() recipe_selected = new EventEmitter<Recipe>()
  
  constructor(){
    this.recipe_list.push(new Recipe("Dawn","A weird pizza","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"))
    this.recipe_list.push(new Recipe("Dawn2","A weird pizza2","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900")) 
  }

  getRecipe(recipeParam : Recipe){
    this.recipe_selected.emit(recipeParam)
  }
}