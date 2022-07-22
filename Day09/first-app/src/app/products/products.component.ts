import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {

    products: Array<string> = []
    prodInput: string = '';

    add(){
        this.products.push(this.prodInput);
        console.log(this.products)
    }

    remove(prod:string){
        //here we simply pass the product name and then get the index of that 
        //prod name so that we can use splice to remove a single element from 
        //the products array!

        this.products.splice(this.products.indexOf(prod), 1)
    }
}