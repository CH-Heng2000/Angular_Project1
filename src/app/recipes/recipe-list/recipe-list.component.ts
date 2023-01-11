import { Component } from '@angular/core';

import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor(){
    this.recipes.push(new Recipe("Dawn","A weird pizza","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"))
    this.recipes.push(new Recipe("Dawn","A weird pizza","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"))
    
  }

}
