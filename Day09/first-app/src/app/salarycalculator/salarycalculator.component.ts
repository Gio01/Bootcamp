import { Component } from "@angular/core";
import { SalaryCalculatorModel } from "./salarycalculator.model";

@Component({
    selector: 'app-salary-calculator',
    templateUrl: './salarycalculator.component.html',
    styleUrls: ['./salarycalculator.component.css']
})
export class SalaryCalculatorComponent{
    
    model : SalaryCalculatorModel = new SalaryCalculatorModel();

    
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
}