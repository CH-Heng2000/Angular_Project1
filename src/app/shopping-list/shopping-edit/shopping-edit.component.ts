import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

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

  @Output() newIngredientEmit = new EventEmitter<Ingredient>()

  getContent(){
    this.name = this.nameElement.nativeElement.value
    this.amt = this.amountElement.nativeElement.value
    this.newIngredient = new Ingredient(this.name,this.amt);
    console.log(this.newIngredient.name + " " + this.newIngredient.amount)
    this.newIngredientEmit.emit(this.newIngredient)
    
  }
}
