/**
 * Look at the Array methods online and use then to solve the problems
 * that he gave!!
 * 
 * This is based on the same products example!
 * 
 * Solve the below problems without using a for loop:
 * 
 * 1. filter all stationary products
 * 2. apply 10% discount to all products
 * 3. find the min cost from the product list
 * 4. find the max cost from the product list
 * 5. find the total product value (cost * units) from the product list
 * 6. find the cheapest product value (this can be based on the cost but here we will return
 * the entire product object and not just the cost like in min cost!)
 * 7. Create a new product list with only the name, cost, and category
 * 8. find the first grocery product in the list
 * 
 * Use as many ES6 features as you can!
 */

 var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

//1. fiter all stationary productss
let station = products.filter(element => {
    //look at each element in the array and match the category to stationary
    return element.category === 'stationary'
})

console.log("1. Filtering Stationary Products: \n", station)


//2. apply 10% discount to all products
let discount = (() => {

    let obj = [];

    products.forEach(element => {   

        obj.push({
            "id": element.id,
            "name": element.name,
            "cost": element.cost - (element.cost * .10),
            "units": element.units,
            "category": element.category
        })
        
    
    })
    //console.log(obj) //need to return all of the objects in an array to the discount variable
    return obj
})(); //we can use this notation so that the arrow function will immediately execute and we do not
//need to do discount()

console.log("2. 10% Discount: \n", discount)


//3. find the min cost from the product list
let min = (() => {

    let min = products[0].cost;
    //console.log(min)

    products.forEach(element => {

        if(element.cost < min){
            min = element.cost
        }
    })

    return min
})();

console.log("3. The min cost: ", min)

//4. find the max cost from the product list
let max = (() => {

    let max = products[0].cost;
    //console.log(max)

    products.forEach(element => {

        if(element.cost > max){
            max = element.cost
        }
    })

    return max
})();

console.log("4. The max cost: ", max)

//5. find the total product value (cost * units) from the product list
let prodValue = (() => {

    let obj = [];

    products.forEach(element => {   

        obj.push({
            "id": element.id,
            "name": element.name,
            "cost": element.cost,
            "units": element.units,
            "category": element.category,
            "totalProdValue": element.cost * element.units
        })
        
    
    })
    
    return obj

})();

console.log("5. Finding the total product value: ", prodValue)

//6. find the cheapest product value (this can be based on the cost but here we will return
//the entire product object and not just the cost like in min cost!)
let cheapest = (() => {

    //chepeast based on the price
    let min = products[0].cost;
    //console.log(min)

    products.forEach(element => {

        if(element.cost < min){
            min = element.cost
           
        }
    })

   
    let idx = products.findIndex(element => {
        //console.log(element.cost)
        //console.log(min)
        return element.cost === min})
    
    return products[idx]
})();

console.log("6. The cheapeast product based on cost: ", cheapest)


//7. Create a new product list with only the name, cost, and category
let newlist = (() => {

    let obj = [];
    products.forEach(element => {   

        obj.push({
            "name": element.name,
            "cost": element.cost,
            "category": element.category
        })
        
    
    })
    return obj
})();

console.log("7. New Product list with name, cost, and category: \n", newlist)


//8. find the first grocery product in the list
let firstGrocery = products.find(element => {
    //find will return the first element that matches the condition (predicate)
    return element.category === 'grocery'
})

console.log("8. First Grocery object: ", firstGrocery)