import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CalculatorResultComponent } from "../calculator-result/calculator-result.component";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService{
    
    public n1: number = 0;
    public n2: number = 0;
    public operation$: BehaviorSubject<{n1: number, n2: number, operation: string}> = new BehaviorSubject({n1: 0, n2: 0, operation: ''})

    notifyOperation(operation: string){
        this.operation$.next({
            n1: this.n1,
            n2: this.n2,
            operation: operation
        })
    }

    /**
     * Here we are using a Behavior subject to be able to display the result on the UI whenever
     * the user is subscribing to the operation to conduct in the calculator logic when clicking
     * which operation they want! 
     * 
     * BehaviorSubject 
     * A variant of Subject that requires an initial value and emits its current value whenever
     * it is subscribed to.
     */

}