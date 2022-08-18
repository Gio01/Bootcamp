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


    //Currency
    currencyInput: number = 0;
    currencySelect: string = '';
    convertedValue: number = 0;

    currencyChange(currSelect: string): void{

        if(currSelect === 'USD'){
            this.convertedValue = this.currencyInput
            console.log( this.currencyInput, "versus convertion: ", this.convertedValue)
        }
        else if(currSelect === 'EUR'){
            this.convertedValue = (this.currencyInput * .980065)
            console.log( this.currencyInput, "versus convertion: ", this.convertedValue)
        }
        else if (currSelect === 'INR'){
            this.convertedValue = this.currencyInput * 79.8436
            console.log( this.currencyInput, "versus conversion: ", this.convertedValue)
        }
        else if (currSelect === 'JPY'){
            this.convertedValue = this.currencyInput * 136.366
            console.log( this.currencyInput, "versus convertion: ", this.convertedValue)
        }
        else if (currSelect === 'CNY'){
            this.convertedValue = this.currencyInput * 6.75182
            console.log( this.currencyInput, "versus convertion: ", this.convertedValue)
        }
        else {//GBP
            this.convertedValue = this.currencyInput * 0.835188
            console.log( this.currencyInput, "versus convertion: ", this.convertedValue)
        }
        
    }

    start: number = 0;
    end: number = 0;
    pageBy: string = '5';
    currentPage: number = 0;
    totalPages: number = 0;

    goToBeginning(){
        this.totalPages = Math.round(this.products.length / parseInt(this.pageBy));
        this.start = 0;
        this.end = parseInt(this.pageBy);
        //console.log("go to beginning total: ", this.totalPages)
        this.currentPage = 1;
    }

    goToEnd(){
        this.totalPages = Math.round(this.products.length / parseInt(this.pageBy));
        this.start = this.products.length - parseInt(this.pageBy);
        this.end = this.products.length;
        this.currentPage = this.totalPages;
        
        // console.log("Go to end total:",this.totalPages)
        // console.log(this.products.length)
        // console.log(parseInt(this.pageBy))
        // console.log(this.products.length / parseInt(this.pageBy))
    }

    goBack(){
        if(this.start > 0){
            this.totalPages = Math.round(this.products.length / parseInt(this.pageBy));
            this.start = this.start - parseInt(this.pageBy)
            this.end = this.end - parseInt(this.pageBy)
            this.currentPage = this.currentPage-1;
            // console.log(parseInt(this.pageBy))
            // console.log(this.products.length / parseInt(this.pageBy))
            // console.log("Go back total:", this.totalPages)
        }
    }

    goForwards(){
        if (this.end <= this.products.length-1){
            this.totalPages = Math.round(this.products.length / parseInt(this.pageBy));
            this.start = this.end;
            this.end = this.end + parseInt(this.pageBy);
            this.currentPage =  this.currentPage + 1;
            console.log(this.end, "versus products length: ", this.products.length)
            console.log(typeof this.end, "versus products length: ", typeof this.products.length)
            // console.log("Go forwards totatl: ",this.totalPages)
        }
    }


    
}