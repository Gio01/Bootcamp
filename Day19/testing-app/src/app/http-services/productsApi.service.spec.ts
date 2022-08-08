import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Product } from './product.model';
import { products as mockProducts} from './products-mock-data';
import { ProductsApiService } from './productsApi.service';

fdescribe('Products API Service', () => {

    let httpTestingController: HttpTestingController;
    let productsApiService: ProductsApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductsApiService],
            imports: [HttpClientTestingModule]
        })

        productsApiService = TestBed.inject(ProductsApiService)//get the instance of the products Api service
        httpTestingController = TestBed.inject(HttpTestingController)
    })

    afterEach(() => {
        httpTestingController.verify()
        //checks to see if there are no left http requests to be handled! 
    })

    it('should get all of the products', () => {
        productsApiService
            .getAll()
            .subscribe(products => {
                expect(products).toBeTruthy()
                expect(products.length).toBe(3)
                const firstProd = products.find(prod => prod.id === 1)
                expect(firstProd).toBeTruthy()
                expect(firstProd?.name).toBe('Pen')
            })

            const req = httpTestingController.expectOne('http://localhost:3000/products')
            expect(req.request.method).toBe('GET')
            req.flush(mockProducts)//here is where we are hijacking the get request
            //and supplying the request with the mockProducts data instead of the 
            //request wanting to get the data from the actual server if there was one implemented! 
    })


    it('shoud post product data', () => {
        productsApiService
            .save({id: 0, name: 'feather Pen'})
            .subscribe(prod => {
                expect(prod).toBeTruthy()
                console.log(prod)
            })

            const req = httpTestingController.expectOne(`http://localhost:3000/products`)
            expect(req.request.method).toBe('POST')
            req.flush(mockProducts)       
        
    })

    it('should update some product data', () => {
        productsApiService
        .save({id: 3, name: 'feather Pen'})
        .subscribe(prod => {
            expect(prod).toBeTruthy()
            console.log(prod)
        })

        const req = httpTestingController.expectOne(`http://localhost:3000/products/${3}`)
        expect(req.request.method).toBe('PUT')
        req.flush(mockProducts)
    })

    it('should remove some product data', () => {
        productsApiService
        .remove({id: 3, name: 'marker'})
        .subscribe(prod => {
            expect(prod).toBeTruthy()
            console.log(prod)
            //expect(products.id).toBe(mockProducts[i].id)
        })

        const req = httpTestingController.expectOne(`http://localhost:3000/products/${3}`)
        //we are sending a delete request and this is the endpoint to do it! http://localhost:3000/products/${product.id}
        //is the original endpoint and now we are simply telling the httpTEsting controller
        //that they should be recieving that same call with the product id based on the product
        //id that we have passed which would be 3 in this case!
        expect(req.request.method).toBe('DELETE')
        req.flush(mockProducts)
    })
})