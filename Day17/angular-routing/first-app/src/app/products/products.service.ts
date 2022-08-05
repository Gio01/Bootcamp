import { Injectable } from "@angular/core";


export interface Product {
    name : string,
    desc : string
}

@Injectable({
    providedIn : 'root'
})
export class ProductsService{
    
    list : Array<Product> = [
        { name : 'Pen', desc : 'Black Pen'}, 
        { name : 'Pencil', desc : '2HB pencil'} , 
        { name : 'Marker', desc : 'Red Marker'}
    ];

    addNew(newProductName : string){
        this.list.push({ name : newProductName, desc : 'Nulla magna excepteur mollit minim ullamco eiusmod dolor excepteur labore laborum. Fugiat aliqua ea adipisicing qui sit sint quis tempor aute ut. Veniam ex nisi enim nulla. Laboris officia duis aute ad commodo sit.'})
    }

    remove(productToRemove : Product){
        this.list.splice(this.list.indexOf(productToRemove), 1)
    }
}