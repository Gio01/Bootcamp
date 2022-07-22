import { Component } from "@angular/core";

@Component({
    selector: 'app-spinner', 
    templateUrl: './spinner.component.html'
})
export class SpinnerComponent { //we export the class so that it is accessible from outside
    //this file! 
    
    counter = 0;

    constructor() {
        
    }
    
    incrementSpinner(){
        this.counter++;
    }

    decrementSpinner(){
        this.counter--;
    }
}

/**
 * Here what we have done is craete a Spinner component so that we can resuse
 * the spinner in multiple locations! 
 * 
 * We need to ensure to register it in the app.mudules.ts within the 
 * declarations!!
 */