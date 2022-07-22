import { Component } from "@angular/core";

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html'
})
export class PipesComponent{
    //currency pipe
    currency: string = '';
    amount: number = 0;

    //date pipe
    date: string = '';
    currentDate: Date = new Date();
}