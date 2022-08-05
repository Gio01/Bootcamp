import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})//this will inject the model within the app-root! so the entire app will have
//access to this model! 
export class SalaryCalculatorModel {
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;

    calculate(){
        let gross = this.basic + this.hra + this.da,
            net = gross * ((100-this.tax)/100);
        this.salary = net;
    }

    /**
     * NOTE: there is no need for us to create get and setter methods within 
     * here as we can directly assign the state values here through the link from 
     * view -> component -> model instance -> model component!!!
     * 
     * This really makes it much easier for the developer to pass data around!!
     */
}
