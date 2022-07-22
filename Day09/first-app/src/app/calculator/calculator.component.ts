import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent {

    result: number = 0;
    // n1: string = '';
    // n2: string = '';

    //now since we used (input)="n1 = txtInput1.valueAsNumber" we can simply
    //get the input as a number and not need to parseInt() on every input string!
    n1: number = 0;
    n2: number = 0;

    // onDummyClick(event: Event){
    //     //here the event was us clicking the Dummy button. So the target was the Dummy Button.
    //     //the target's innerText will be 'Dummy' which is what gets displayed in the console! 
    //     console.log((event.target as HTMLButtonElement).innerText)
    //     console.log(event)
    // }

    add(){
        //console.log(parseInt(no1) + parseInt(no2))
        this.result = this.n1 + this.n2
        return this.result
    }

    subtract() {
        this.result = this.n1 - this.n2
        return this.result
    }

    multiply(){
        this.result = this.n1 * this.n2
        return this.result
    }

    divide(){
        this.result = this.n1 / this.n2
        return this.result
    }

    // add(){
    //     //console.log(parseInt(no1) + parseInt(no2))
    //     this.result = parseInt(this.n1) + parseInt(this.n2)
    //     return this.result
    // }

    // subtract() {
    //     this.result = parseInt(this.n1) - parseInt(this.n2)
    //     return this.result
    // }

    // multiply(){
    //     this.result = parseInt(this.n1) * parseInt(this.n2)
    //     return this.result
    // }

    // divide(){
    //     this.result = parseInt(this.n1) / parseInt(this.n2)
    //     return this.result
    // }
}
// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-calculator',
//     templateUrl: './calculator.component.html'
// })
// export class CalculatorComponent {

//     result: number = 0;

//     add(no1: string, no2: string){
//         //console.log(parseInt(no1) + parseInt(no2))
//         this.result = parseInt(no1) + parseInt(no2)
//         return this.result
//     }

//     subtract(no1: string, no2: string) {
//         this.result = parseInt(no1) - parseInt(no2)
//         return this.result
//     }

//     multiply(no1: string, no2: string){
//         this.result = parseInt(no1) * parseInt(no2)
//         return this.result
//     }

//     divide(no1: string, no2: string){
//         this.result = parseInt(no1) / parseInt(no2)
//         return this.result
//     }
// }