import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Project1';
  selectedPage : number;

  constructor(private titleService:Title) {
    this.titleService.setTitle("Angular Project1");
    this.selectedPage = 2;
  }

  directToPage(page : {type : string}){
    if(page.type === 'recipes'){
      // console.log("To the Recipes page")
      this.selectedPage = 1
    }else if(page.type === 'shoplist'){
      //console.log("To the Shopping list page")
      this.selectedPage = 2
    }
  }
}
