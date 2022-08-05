import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, ProductsService } from "./products.service";


@Component({
    selector : 'app-product-details',
    templateUrl : 'product-details.component.html'
})
export class ProductDetailsComponent{

    product? : Product;

    constructor(private route : ActivatedRoute, private productsService : ProductsService){
        this.route.parent?.params.subscribe(params => {
            const productName = params['productName'];
            this.product = this.productsService.list.find(product => product.name === productName)
        })
    }

    /**
     * Note here that the difference is that now we are using the parent? in order to make the link
     * from the product component to this component and then also so that we are able to get all 
     * the data from the products parent component
     * products -> product -> details
     */

}