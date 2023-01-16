import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{ static : false })nameElement:ElementRef
  @ViewChild('amountInput',{ static : false })amountElement:ElementRef
  newIngredient : Ingredient
  name : string;
  amt : number;
  ingredients : Ingredient[] = []

  constructor(private shoppingListService : ShoppingListService){}

  addIng(){
    this.name = this.nameElement.nativeElement.value
    this.amt = this.amountElement.nativeElement.value
    this.newIngredient = new Ingredient(this.name,this.amt);
    //console.log(this.newIngredient.name + " " + this.newIngredient.amount)
    this.shoppingListService.addIngredient(this.newIngredient);
  }
}
