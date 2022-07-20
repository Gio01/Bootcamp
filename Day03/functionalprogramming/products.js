/**
 * Collection Utility Functions
 *  - sort (just use the simple Bubble sort where you look at the current and the 
 *    n + 1 index and compare them to see which one is greater based on some criteria)
 * 
 *      > any list by any attribute
 *      > in acesnding order (default)
 *      > in descending order
 * 
 *  - filter
 *      > products by category (stationary or grocery or utencil)
 *      > costly products (cost > 50)
 *      
 *  - forEach
 *  - map
 *      Map is used for transformation! 
 *      Ex: [v1, v2, v3, v4] => [t1, t2, t3, t4]
 *      Needed: map(list, transformationFunc)
 *          where the transformationFunc will be able to take a value in the list
 *          and transform it into the desired value
 * 
 *      transformationFunc(v) => t
 * 
 *      map(list, transformationFunc) //=> [t1, t2, t3, t4]
 *      - the map here will contain the loop 
 * 
 *      Use case: create a new list of products with the 10% discount applied on the cost
 *      
 * 
 *  - group
 *      Use Case: We want to group together the products by category
 * 
 *      Outcome:
 *          {
 *              "stationary" : [
*                       {id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
                        {id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'}
 *              ],
                "grocery" : [
                    {id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	                {id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'}
                ],
                "utencil" : [
                    {id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
                ],
                "electronics" : [
                    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
                ]
 *          }
 * 
 *      Use case 2: Group products by cost (costly/affordable)
 *      Outcome:
 * 
 *      Use Case 3: Group products based on units (understocked/wellstocked)
 * 
 * IMPORTANT: we are to not use the built in functions within the Array prototype
 */


 var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

//Here we are creating a generalized function to not need to keep using
//the console.group() and console.groupEnd() everywhere!
function describe(title, fn){
    console.group(title)
       fn()
    console.groupEnd()
}

describe('Initial List', function(){
    console.table(products)
});



describe('Sorting', function(){
    describe('Products By Id', function(){
        function sortProductsById(prod){
            /* sorting the products by Id */
            //prod.length -1 so that we are not accessing a cell that does not exist
            // here we have 6 cells so from index 0 to index 5

            for(var i = 0; i < prod.length-1; i++){
                //i will begin at the first cell (index 0) until n-1 (before last)
                for(var j = i + 1; j < prod.length; j++){
                    //j will begin on the second cell (index 1) until n (the last cell
                    //in this way we can always compare the n and n+1 or first and second
                    if(prod[i].id > prod[j].id){
                        var temp = 0;
                        //console.log(prod[i].id , " ->", prod[j].id)
                        //swap the left index value with the right one
                        temp = prod[i]
                        prod[i] = prod[j]
                        prod[j] = temp
                    }
                }
            }
        }
        sortProductsById(products)
        console.table(products)
    })

    describe('Generic Sort', function(){

        /**
         * Here we are creating a generic sort that will be able to handle both functions being
         * passed and also attNames instead of having two seperate sorts like we did below!
         * We are basically dong the same thing but by just checking to see if the arg being 
         * passed is a string for an attrName or if it is a function by using the typeof keyword!
         */

        function sort(list, comparer){
            var comparerFn = null;
            if (!comparer) return;
            if (typeof comparer === 'function'){
                comparerFn = comparer;
            }
            if (typeof comparer === 'string' /* by attrName */){
                comparerFn = function(o1, o2){
                    if (o1[comparer] < o2[comparer]) return -1;
                    if (o1[comparer] > o2[comparer]) return 1;
                    return 0;
                }
            }
            if (!comparerFn) return;
            for (var i=0; i<list.length-1; i++){
                for(var j=i+1; j < list.length; j++){
                    if (comparerFn(list[i], list[j]) > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp
                    }
                }
            }
        }


            describe('By attribute Name', function(){
                /*function sort(list, attrName){

                    for(var i = 0; i < list.length-1; i++){
                        //i will begin at the first cell (index 0) until n-1 (before last)
                        for(var j = i + 1; j < list.length; j++){
                            //j will begin on the second cell (index 1) until n (the last cell
                            //in this way we can always compare the n and n+1 or first and second
                            if(list[i][attrName] > list[j][attrName]){
                                //console.log(prod[i].id , " ->", prod[j].id)
                                var temp = 0;
                                //swap the left index value with the right one
                                //remember that here we are sorting objects within cells so each cell
                                //represents a single object that has many attributes and hence why list[j][attrName]
                                //is valid as we go to that object in the cell and look into its properties
                                temp = list[i]
                                list[i] = list[j]
                                list[j] = temp
                            }
                        }
                    }
                    return list
                }
                */
            describe('Products By Name', function(){
                sort(products, 'name')
                console.table(products)
            })
            describe('Products By Cost', function(){
                sort(products, 'cost')
                console.table(products)
            })
        })
    


        describe('By any comparer', function(){

            //Here we are doing the sort with a function included to check the value which 
            //is the procust or cost and units! However in JS since we can pass anything into
            //the args we can pass reference to the function and simply call the function from 
            //within with the appropiate objects n and n+1 to make the object comparisons
            
            /*function sort(list, comparerFn){
                for (var i=0; i<list.length-1; i++){
                    for(var j=i+1; j < list.length; j++){
                        if (comparerFn(list[i], list[j]) > 0){
                            //here in the if statement we pass in each of the list objects
                            //so list[0] would mean the first object and then we can access its
                            //properties which we do in the productsCompareByvalue() such as p1.costs
                            //then we return a certain value to let us know if one is greater than the other
                            //less than the other or the same to them be able to sort the place holder
                            //of those objects! 
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp
                        }
                    }
                }
            }
            */

            describe('Products By Value (value = cost * units)', function(){
                var productsComparerByValue = function(p1, p2){
                    var p1Value = p1.cost * p1.units,
                        p2Value = p2.cost * p2.units;
                    if (p1Value < p2Value) return -1;
                    if (p1Value > p2Value) return 1;
                    return 0;
                }
                sort(products, productsComparerByValue);
                console.table(products)
            })
        
        })
    })
})


describe('Filter', function(){

    describe('filter stationary products', function(){

        function filterStationaryProducts(){
            var result = [];
            for(var i = 0; i < products.length; i++){
                if (products[i].category === 'stationary')
                    result.push(products[i]);
            }
            return result;
        }
        var stationaryProducts = filterStationaryProducts()
        console.table(stationaryProducts)
    })

/* My implementation of how to generalize the filter function! 

    describe('any list by any criteria', function(){
        
            function filter(list, filterBy, value){
                var result = [];
                for(var i = 0; i < list.length; i++){
                    if (filterBy === 'cost'){
                        console.log("filterBy: ", filterBy)
                        if(list[i][filterBy] > value){
                            result.push(list[i]);
                        }
                    }
                    else if(filterBy === 'units'){
                        if(list[i][filterBy] < value){
                            result.push(list[i]);
                        }
                    }
                }
                return result
            }    
        
        
        describe('Costly Products [cost > 50 ]', function(){
            var costlyProducts = filter(products, 'cost', 50);
            console.table(costlyProducts);
        });

        describe('Understocked products [units < 50 ]', function(){
            var understockedProducts = filter(products, 'units', 50);
            console.table(understockedProducts)
        });

    })
    */

    describe('any list by any criteria', function(){
        function filter(list, predicate){
            var result = [];
            for (var i = 0; i < list.length; i++){
                if (predicate(list[i])){
                    result.push(list[i])
                }
            }
            return result;
        }
        /**
         * Now since we did need to negate the costlyProducts to get the affordable products
         * we can instead write a negate function here since are also going to do that same
         * negate logic for products that are wellstocked versus products that are not well 
         * stocked
         */
        function negate(predicate){
            console.log(predicate.apply(this, arguments))
            console.log(arguments)
            //console.log(this)
            console.log(predicate)
            return function(){
                return !predicate.apply(this, arguments);
            }
        }

        describe('Products by cost', function(){
            //Here we are creating a costlyProductPredicate ourside of the other two inner 
            //describes() so that we are able to access the same function within the Costly
            //products and also the Affordable ones
            var costlyProductPredicate = function(product){
                console.log("costly prodicts predicate return", product.cost > 50)
                return product.cost > 50;
            };

            describe('Costly Products [cost > 50 ]', function(){
                var costlyProducts = filter(products, costlyProductPredicate);
                console.table(costlyProducts);
            });

            describe('Affordable Products (!costly products)', function(){
                //Here we can say if something is costly then it is not affordable which is why
                //we can just do !costlyProductPredicate(product); in order to get the 
                //false case which will say it is affordable!!

                /* var affordableProductPredicate = function(product){
                    return !costlyProductPredicate(product);
                } */
                var affordableProductPredicate = negate(costlyProductPredicate);
                var affordableProducts = filter(products, affordableProductPredicate)
                console.table(affordableProducts);
            });
        })
        describe('Products by units', function(){
             var understockedProductPredicate = function(product){
                return product.units < 50;
            }
            describe('Understocked products [units < 50 ]', function(){
                var understockedProducts = filter(products, understockedProductPredicate);
                console.table(understockedProducts)
            });

            describe('Wellstocked products (!understocked products)', function(){
                /* var wellstockedProductPredicate = function(product){
                    return !understockedProductPredicate(product);
                } */
                var wellstockedProductPredicate = negate(understockedProductPredicate);
                var wellstockedProducts = filter(products, wellstockedProductPredicate);
                console.table(wellstockedProducts);
            })

        });

    })
})


describe('Map', function(){

    function map(list, transformationFunc){
        var discount = [];
            for(var i = 0; i < list.length; i++){
                var value = transformationFunc(list[i]);
                discount.push(value)
            }
            return discount;
    }

    
    describe('10% discount applied to the costs', function(){

        function transformationFunc(prod){
            /**
             * Here we need to return a new object with the updated cost!
             * That way we have the old products attributes and the updated version
             */
            return {
                id: prod.id,
                name: prod.name,
                cost: prod['cost'] - (prod['cost'] * .10),
                units: prod.units,
                category: prod.category
            }
        }
    
        
        console.table(products);
        console.table(map(products, transformationFunc));
        
    });

})

describe('group', function(){
    describe('grouping products by category', function() {
        function groupProdByCategory(){
            /*
            This is my own implementation but it is very limited as this assumes that there are no 
            more categories to exist but instead i should dynamically check to see if that category
            is in the object and if not then just add a new array and add the objects within it!

            var station = [];
            var grocery = [];
            var utencil = [];
            var elec = [];

            for(var i = 0; i < products.length; i++){
                if(products[i]['category'] === 'stationary'){
                    station.push(products[i]);
                }
                else if(products[i]['category'] === 'grocery'){
                    grocery.push(products[i])
                }
                else if(products[i]['category'] === 'utencil'){
                    utencil.push(products[i])
                }
                else if(products[i]['category'] === 'electronics'){
                    elec.push(products[i])
                }
            }
            //console.log(station)

            return {
                'stationary' : station,
                'grocery' : grocery,
                'utencil' : utencil,
                'electronics' : elec
            }
            */
           //This is the dynamic manner in which he created it
            var result = {};
            for (var i = 0; i < products.length; i++){
                var product = products[i],
                    category = product.category;
                if (!(category in result)){
                    //if the category is not within the object than we create the category
                    //attribute and give it an empty array
                    result[category] = [];
                }
                result[category].push(product) //we match the category and then add the 
                //product objects within that array! This works because we initialize the empty
                //array in the if statement so there will always exists that category since we
                //dynamically check and create them in the object we return! Smart!!
            }
            return result;

        }
        console.log(groupProdByCategory())

    })

    describe('grouping any list by any category', function(){
        function group(list, keySelectorFn){
            var result = {};
            for (var i = 0; i < list.length; i++){
                var item = list[i],
                    key = keySelectorFn(item);
                if (!(key in result)){
                    result[key] = [];
                }
                //this if statement above can be written as 
                //result[key] = result[key] || [];
                result[key].push(item)
            }
            return result;
        }
        describe('products by category', function(){
            var productsByCategory = group(products, function(product){
                console.log(product.category)
                return product.category;
            })
            console.log(productsByCategory)

        })
        describe('products by cost (costly / affordable)', function(){
            var productsByCost = group(products, function(product){
                return product.cost <= 50 ? 'affordable' : 'costly'; 
            });
            console.log(productsByCost);
        })

         describe('products by units (understocked / wellstocked)', function(){
            var productsByUnits = group(products, function(product){
                return product.units < 50 ? 'understocked' : 'wellstocked'
            })
            console.log(productsByUnits);
        })

    })
})