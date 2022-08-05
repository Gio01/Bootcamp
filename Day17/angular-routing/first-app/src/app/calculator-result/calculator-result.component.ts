import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CalculatorService } from "../calculator-app/calculator-logic.service";


@Component({
    selector : 'app-calculator-result',
    templateUrl : 'calculator-result.component.html'
})
export class CalculatorResultComponent{

    result: number = 0;
    operationToDo: Params = {operation: ''};
    query: Params = {n1: '', n2: ''}

    /* process the data collected by the calculator component and print the result */
    constructor(private router : ActivatedRoute){
        this.router.params.subscribe(params => {
            console.log('route params', params);
            console.log(typeof params)
            this.operationToDo = params;
            //this.operation(params)
        });
        this.router.queryParams.subscribe(queryParams => {
            console.log('query params = ', queryParams)
            this.query = queryParams
        })
        this.operation()
    }

    operation(){
        console.log(this.operationToDo['operation'])
        if(this.operationToDo['operation'] === 'add'){
            this.result = parseInt(this.query['n1']) + parseInt(this.query['n2'])
        }
        else if(this.operationToDo['operation'] === 'subtract'){
            this.result = parseInt(this.query['n1']) - parseInt(this.query['n2'])
        }
        else if(this.operationToDo['operation'] === 'multiply'){
            this.result = parseInt(this.query['n1']) * parseInt(this.query['n2'])
        }
        else if(this.operationToDo['operation'] === 'divide'){
            this.result = parseInt(this.query['n1']) / parseInt(this.query['n2'])
        }
    }



    
    
}