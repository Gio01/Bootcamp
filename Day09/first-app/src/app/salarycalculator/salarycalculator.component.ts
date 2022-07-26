import { Component } from "@angular/core";
import { SalaryCalculatorModel } from "./salarycalculator.model";

@Component({
    selector: 'app-salary-calculator',
    templateUrl: './salarycalculator.component.html',
    styleUrls: ['./salarycalculator.component.css'],
    providers: [
        SalaryCalculatorModel//each component instance will get its own 
        //instance of the model so each component will have its own 
        //state!!
    ]
})
export class SalaryCalculatorComponent{
    
    // model : SalaryCalculatorModel = new SalaryCalculatorModel();
    //since we have added the model as a service in the providers of the
    //app.module file, we can simply call it from the constructor instead! 
    
    /**
     * Now we should not have the calculating logic within here as the calculator
     * is nonUI logic! WIthin the component we should only be having logic
     * for the displaying or things in the UI or user interaction with the UI
     * but not any logic on the use of certain data to so things like 
     * calculations or other complex functionality!
     * 
     * So here the calculate() and everything should be moved into a model
     * class that we can create in the same directory!
     */

    // model: SalaryCalculatorModel; //here we declare a model of type SalaryCalculatorModel
    // constructor(model: SalaryCalculatorModel){
    //     this.model = model;
    // }

    //This below is the same as the above except now we do not explicitely
    //type it in the manner like the one above!
    constructor(public model: SalaryCalculatorModel){

    }

}