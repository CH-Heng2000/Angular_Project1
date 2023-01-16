import { Component } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {

  recipe_list: Recipe[] = []

  constructor(private recipeService : RecipeService){}

  ngOnInit(){
    this.recipe_list = this.recipeService.getRecipes();
  }

  getRecipe(recipeParam : Recipe){
    this.recipeService.recipe_selected.emit(recipeParam)
  }
}