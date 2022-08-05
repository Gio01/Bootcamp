import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator2',
    templateUrl: './calculator2.component.html'
})
export class Calculator2Component {

    operation: string = '';
    n1: number = 0;
    n2: number = 0;
    result: number = 0;

    op(){
        if(this.operation === 'add'){
            this.result = this.n1 + this.n2
        }
        
        if(this.operation === 'subtract'){
            this.result = this.n1 - this.n2
        }
        
        if(this.operation === 'multiply'){
            this.result = this.n1 * this.n2
        }
        
        if (this.operation === 'divide'){
            this.result = this.n1 / this.n2
        }
        console.log("Clicked!", this.operation)
        return this.result
    }
    
}