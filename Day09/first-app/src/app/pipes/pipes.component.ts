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

    product = { id : 100, name : 'Pen', cost : 10}

    products : Array<string> = Array();

    constructor(){
        for (let i = 1; i <= 100; i++)
            this.products.push(`Product - ${i}`)
    }
    //This constructor will create an object with the 100 objects that I will
    //need to paginate through

    start: number = 0;
    end: number = 0;
    pageBy: string = '5';
    currentPage: number = 0;
    totalPages: number = this.products.length / parseInt(this.pageBy);

    goToBeginning(){
        this.start = 0;
        this.end = parseInt(this.pageBy);
    }

    goToEnd(){
        this.start = this.products.length - parseInt(this.pageBy);
        this.end = this.products.length;
        this.currentPage = this.totalPages-1;
    }

    goBack(){
        if(this.start !== 0){
            this.start = this.start - parseInt(this.pageBy)
            this.end = this.end - parseInt(this.pageBy)
            this.currentPage = this.currentPage-1;
            console.log(parseInt(this.pageBy))
            console.log(this.products.length / parseInt(this.pageBy))
        }
    }

    goForwards(){
        if (this.end != this.products.length){
            this.start = this.end;
            this.end = this.end + parseInt(this.pageBy);
            this.currentPage =  this.currentPage + 1;
        }
    }

    
}