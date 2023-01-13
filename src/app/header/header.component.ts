import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() selectedPage = new EventEmitter<{type: string}>();

    selectPage(type: string){
        this.selectedPage.emit({type});
        // if(type == 'recipes'){
        //     console.log("To the Recipes page")
        // }else if(type == 'shoplist'){
        //     console.log("To the Shopping list page")
        // }
    }
}