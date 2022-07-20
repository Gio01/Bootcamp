"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_salary;
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello There! How are you?");
let no = 10;
function add(x, y) {
    return x + y;
}
let result = add(100, 200);
let x; //this is a variable where you can assign it any type! 
//it can be a string, an object, and array or whateever!
x = 10;
x = 'string';
x = true;
x = {};
x = [];
let y; //if you do not give it a type then it will be of type any!
//however we should declare the types as that is the whole point of using TS
//otherwise we would just be using JS. So here just say ley y : any;
function greet(name) {
    console.log("Hi", name);
}
greet("Gio");
//type inferrence
let a = 10; //here a is inferred to be of type number! However if you do not give a, a value then
//a will be of type any!
let result2 = add(100, 300); //result2 will be inferred to be of type number because add() returns
//a number!!
//unknown 
//when you want to allow any type of input but want to be able to see the issues at compile time
//and not when you run the program, you need to use unknown because if you use any you will
//see the issues once you have ran the program!!
function len(no) {
    return no.length;
}
//vs.
function len2(no) {
    /**
     * Now because we use unknown we need to check some condition to then allow that input
     * to be used and ran. We need to check if it is of some type.
     */
    if (typeof no === 'string')
        return no.length;
    if (no instanceof Array)
        return no.length;
    throw new Error('arg:no has no length attribute');
    //now since we added this Error the compiler will not give us an error because of the return
    //type may not be number because we are taking care of the cases where the input will
    //not hae the length property and hence we cannot return a number! if we do not handle the
    //error then TS compiler will tell us 
    //return no.length;
    /**
     * Basically unknown allows us to use type safety on any input!
     * it will give us an error if we do not take care of the checks for any errors!
     * So we need to do the type checking ourselves to be able to have the proper needed
     * return value from the function!
     */
}
console.log(len(10));
console.log(len('A string'));
//void is used when we are not returning anything
function doSomething() {
    console.log("do something");
}
//so do not assign the function to a variable as nothing is being returned
//dont do this because result3 will be undefined/have no value since the function does not
//return anything to it!
let result3 = doSomething();
doSomething();
/**
 * Enums in TypeScript
 */
//An enum is a collection of named values
/**
 * Ex:
 * red = 1
 * green = 2
 * blue = 3
 *
 * so we are simply assigning a sort of lookup table for certain values we want
 * to have
 *
 */
let oldpen = { name: 'Pen', color: 'red' };
/**
 * an issue with this code above! If we are wanting to compare some input value
 * with the color red, people can use Red, REd, RED, etc.. which means we need
 * to convert the input to lowercase or whatnot in order to be able to do a match
 * properly with ===.
 *
 * Instead we can declare certain values and assign then some values that are
 * easier to work with such as changing color to be represented as 1
 *
 * So how can we fix this? With the following code by creating const variables
 * that we can use everywhere in the code to represent some value we will
 * be using a lot
 *
 * const RED = 1;
 * const GREEN = 2;
 * const BLUE = 3;
 *
 * the problem with this const approach is that what if we are working with many
 * products that have those same colors?
 *
 * There is better organization in being able to use enum to be able to have
 * attributes based on certain objects so that we have identifiable attributes
 * via the .RED attribute notation as seen below!
 *
 * It helps so that we can continue to resuse values in the code in a manner
 * that is more organized and less prone error in us mispelling the values or
 * forgetting what some value like 1 is supposed to represent!
 *
 * We also get type safety in using enums!
 */
var ProductColors;
(function (ProductColors) {
    ProductColors["RED"] = "RED";
    ProductColors["GREEN"] = "GREEN";
    ProductColors["BLUE"] = "BLUE";
})(ProductColors || (ProductColors = {}));
let pen = { name: 'Pen', color: ProductColors.RED };
if (pen.color === ProductColors.RED) {
    console.log('Pen color is RED');
}
else {
    console.log('Not a red pen');
}
/**
 * Interface usage
 *
 * Ex: Lincoln is the employer and Gio is the employee
 * they both have a role in this relationship/contract
 *
 * This same relationship based on their roles can be created with interfaces!
 */
//let pencil = {name: 'Pencil', color: ProductColors.GREEN}
//by initializing the var pencil with this obj info here we are creating a 
//type so that is why pencil now has the type of a product with attributes
//name and color. It is this through type inference!
//pen = {id: 1}; // this gives us an error since the product type does not have
//an id as seen with the type inference created by initializing a var with attributes
//However if we declare a var and then later initialize values, we will have
//the declared value of having any type and so we can do the folowwing
let pencil;
pencil = { name: 'Pencil', color: ProductColors.GREEN };
let pencil2;
//pencil2 = {id: 100, name:'Dummy Product', cost: 10}//gives us errors!
/**
 * so what is the benefit in using an interface vs just giving the obj with
 * attributes as the type to the declared variable? Well we can do that but we will
 * need to do that everywhere in our code which is gonna make things more complicated
 * so instead we can use an interface to limit the attributes and ensure we are
 * only getting data with certain attributes and nothing more. In this manner
 * we are ensuring type safety!!
 */
function printProduct(product) {
    console.log(`Name = ${product.name} , Color = ${product.color}`);
}
printProduct(pencil);
let emp = { id: 100, name: 'Gio', city: 'Houston' };
let addOperation = (x, y) => x + y;
let multiplyOperation = (x, y) => x * y; //type inference from the interface
//we can also nest the interfaces in this manner by having the link of 
//MathFunction iterface used within the Calculator interface!
let calc = {
    result: 0,
    //variable of some type! 
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
};
//so now in order to not get an error we need to ensure to assign the same
//attributes withing the calc interface into the calc variable! And notice how
//we did not need to give the types here as we get that infered to from the MathFunction
//interface!
/**
 * So essentially when we have some repeatable functionality and we can generalize
 * it then we need to think about using interfaces!
 */
//Classes! 
class Employee {
    //setting this setter as private means that it is only going to be 
    //accessible within this file class and not outside of the file
    constructor(id, name, city) {
        this._id = 0; //private means that it is only accessible within
        //this file and not outside of it! 
        this._name = '';
        //the _ is a convention here for private attributes which means it is not needed 
        //but it s commonly used
        this.city = '';
        _Employee_salary.set(this, 10); //this is how we can trully get something private and not accessible
        this._id = id;
        //if we wanted for any assignment to go through the setter we need to 
        //instead use the id so that the setter is called!
        //this.name = name; //so here it would go through the set name method!
        this._name = name; //here it will directly go to change the private
        //name attribute defined at the top of the class! NOT the set name() method!
        this.city = city;
    }
    //globally like we did with JS closures
    //the set and the get will appear as a single entity known as id as the name!
    set id(val) {
        console.log('id (set) invoked');
        if (val <= 0) {
            throw new Error('id cannot be zero or negative value');
        }
        this._id = val;
    }
    get id() {
        console.log('id (get) invoked');
        return this._id;
    }
    get name() {
        return this._name;
    }
    //by default TS will make these setters and getters public if you do not 
    //say private but can always say it yourself!
    set name(val) {
        console.log('name (set) invoked');
        if (val === '') {
            throw new Error('Name cannot be empty');
        }
    }
    display() {
        console.log(`id = ${this._id}, name = ${this._name}, city = ${this.city}, salary = ${__classPrivateFieldGet(this, _Employee_salary, "f")}`);
    }
}
_Employee_salary = new WeakMap();
let emp2 = new Employee(100, 'Gio', 'Houston');
emp2.display();
//console.log(emp2.salary) does not exist! Trully private!
console.log(emp2.id); //this error is only seen at compilation time with TS which 
//means that if we run it we will still be able to see that id as it will run in
//JS! This private is there for us to see but the JS actually does not have that 
//private! it will create it publically!
/**
 * However now that we have created the get and the set, we do not see the error
 * with trying to do emp2.id as it is automatically invoking the set function!
 *
 * The idea behind needing or wanting to have the set and get methods is that
 * we can restrict the values that can be set! So someone will not be able to
 * give a value outside of that limitation defined in the set method!
 *
 * NOTE: we added the _ in the id for the attribute that has a get and set method!
 * (_id)
 */
/**
 * If i want to create a read only attribute then i need to make the get() method
 * for that attribute as public and then the set() method as private so that
 * they cannot change the value/write to the value and can only read/get the value
 * of that attribute.
 *
 * - however we can simply say readonly before the attribute as i did with the
 * city and it will give us an error saying that this is a read only attribute!
 */
class Rectangle {
    constructor(height, width) {
        //by deafult TS will make these attributes public but we can say it to be 
        //more ellaborate about it!
        this.height = 0;
        this.width = 0;
        //public 
        this.height = height;
        this.width = width;
    }
}
class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
let box = new Rectangle2(10, 11);
console.log(box.height);
/**
 * Here we do not even need to explicitely create the attributes and then do
 * the constructor fully as TS can infer it all after we create the instance
 * box and pass in the values. TS simply needs the constructor with the
 * paramaters you want and make sure you add public or private here as that
 * is needed in this case!
 */
class Circle {
    constructor(radius) {
        this.radius = 0;
        this.radius = radius;
    }
    area() {
        return ((Math.PI * (this.radius ** 2)));
    }
    perimeter() {
        return (2 * Math.PI * this.radius);
    }
}
let circle = new Circle(10);
console.log('Circle Area: ', circle.area());
console.log('Circle Perimeter: ', circle.perimeter());
class Rectangle3 {
    constructor(length, width) {
        this.length = 0;
        this.width = 0;
        this.length = length;
        this.width = width;
    }
    area() {
        return (this.length * this.width);
    }
    perimeter() {
        return (2 + (this.length * this.width));
    }
}
let rec = new Rectangle3(10, 2);
console.log('Rectangle area: ', rec.area());
console.log('Rectangle perimeter: ', rec.perimeter());
function printStats(obj) {
    console.log(`Obj Area: ${obj.area()}`);
    console.log(`Obj Perimeter: ${obj.perimeter()}`);
}
printStats(rec);
printStats(circle);
/**
 * In creating the interface we are able to say that we want a shape to have
 * the methods area and perimeter to then be able to pass a Shape input!
 * We just need to pass in the same name so in my case I had Area!! They need
 * to be the same name!!! I cannot try to use Area() in the interface while the
 * class has area()! The naming is important!
 */
class ShapeBase {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle4 extends ShapeBase {
    constructor(name, height, width) {
        super(name);
        this.height = height;
        this.width = width;
    }
    static From(dimensions) {
        return new Rectangle4(Rectangle4.shapeName, dimensions[0], dimensions[1]);
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return 2 * (this.height + this.width);
    }
}
Rectangle4.shapeName = 'rectangle';
class Circle4 extends ShapeBase {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    static From(r) {
        return new Circle4(Circle4.shapeName, r);
    }
    area() {
        return (22 / 7) * this.radius * this.radius;
    }
    perimeter() {
        return 2 * (22 / 7) * this.radius;
    }
}
Circle4.shapeName = 'circle';
function printStats2(obj) {
    console.log('Name = ', obj.name);
    //let objAsShape = (obj as unknown) as Shape;
    console.log("Area = ", obj.area());
    console.log("Perimiter = ", obj.perimeter());
}
let box2 = new Rectangle4("rectangle", 10, 11);
/*
console.log("Area = ", box.area())
console.log("Perimiter = ", box.perimeter())
*/
printStats2(box2);
let circle2 = new Circle4("circle", 12);
/*
console.log("Area = ", circle.area())
console.log("Perimiter = ", circle.perimeter())
*/
printStats2(circle2);
//let sb : ShapeBase = new ShapeBase()
//static methods/static members
//These are methods that are accessible within the class file but not within
//the instance of that class.
//in the same manner static fields are only accessible within the class file and
//not accessible by the instance of that class!!
//meaning that while Circle4.shapeName works this is the entire class and on an 
//instance so let circle:Circle4 = new Cirlce4();
//circle.shapeName willnot work!! as this is an instance trying to access a static
//field!! 
//Generics 
//let list: number[] = [];
let list = [];
//same as the previous list but this is using the generics syntax
list.push(10);
//list.push('a string');//gives us an error since we are trying to insert a 
//string into a number array
//list.push({})//same issue here!
class NumberList {
    constructor() {
        this.collection = [];
    }
    add(no) {
        this.collection.push(no);
    }
    get values() {
        return [...this.collection];
    }
    pop() {
        //undefined value!
        return this.collection.pop();
    }
}
let numList = new NumberList();
numList.add(10);
numList.add(20);
numList.add(30);
console.log('NumList values = ', numList.values);
class StringList {
    constructor() {
        this.collection = [];
    }
    add(no) {
        this.collection.push(no);
    }
    get values() {
        return [...this.collection];
    }
    pop() {
        //undefined value!
        return this.collection.pop();
    }
}
/**
 * If I wanted to create other classes with the same format, instead of just
 * copying the classes like StringList and NumberList we can use generics to
 * handle this issue with wanting to use a list to contain different types of
 * datas! In this manner we can keep changing the type of the data into the
 * array in a manner that is dynamic and does not require us to need to copy
 * paste the same code in order to just change the array types to handle the
 * different types of data we want to store into arrays!
 *
 * Sure we could create one class and use the type any but that is not good
 * to do because all of our arrays will have a variety of different data types
 * which means I would not be able to create arrays of a single type!
 *
 */
//When we create an instace of a class the runtime will create the 
//instance using the generic for that certain type of data! 
class MyList {
    constructor() {
        this.collection = [];
        this.groups = {}; //how we can create a generic map/dictionary
        //groupby
        // public group(keySelectorFn: (t: T) => string): MyList<T> {
        //     let result = new MyList<T>();
        //     for (var i = 0; i < this.collection.length; i++){
        //         var item = this.collection[i],
        //             key = keySelectorFn(item);
        //             console.log("Item: ", item)
        //             console.log("Key: ", key)
        //         if(item.title === 'Angular'){
        //             //console.log(item.title)
        //             result.collection.push(item)
        //         }
        //         console.log(result)
        //         // if (!(key in result)){
        //         //     console.log(typeof result.collection)
        //         //     console.log(typeof key)
        //         //     result.collection[key] = [];
        //         // }
        //         // //this if statement above can be written as 
        //         // //result[key] = result[key] || [];
        //         // result.collection[key].push(item)
        //     }
        //     return result;
        // }
    }
    add(no) {
        this.collection.push(no);
    }
    get values() {
        return [...this.collection];
    }
    pop() {
        //creation or an undefined value!
        return this.collection.pop();
    }
    filter(predicate) {
        /**
         * With filter we filter on some predicate which is a function that returns
         * true or false (boolean) which determines if some condition is met
         * or not.
         * in the example the predicate will tell us if is the book.cost < 50
         */
        let result = new MyList();
        for (let item of this.collection) {
            if (predicate(item)) {
                result.add(item);
            }
        }
        return result;
    }
    sort(comparer) {
        //Here we can say string | function in order to be able to take in both
        //a string or a function!!
        for (var i = 0; i < this.collection.length - 1; i++) {
            for (var j = i + 1; j < this.collection.length; j++) {
                if (comparer(this.collection[i], this.collection[j]) > 0) {
                    var temp = this.collection[i];
                    this.collection[i] = this.collection[j];
                    this.collection[j] = temp;
                }
            }
        }
    }
    forEach(fn) {
        for (let item of this.collection) {
            fn(item);
        }
    }
    //map
    map(transformationFn) {
        var result = new MyList();
        /**
         * Here there is a need to use TResults as a new type because in the map
         * let discountedBooks = books.map(book => ({ title : book.title, cost : book.cost * 0.9}))
         * we are wanting to get a return object of attributes title and cost only which is
         * different than the input which was the Book type which has more properties and hence they
         * will be of different types! If they were the same then the types would have the same
         * attributes!! Since that is not teh case we need to create a new type for that return
         * value list!!
         */
        for (var i = 0; i < this.collection.length; i++) {
            var item = this.collection[i];
            var transformedItem = transformationFn(item);
            result.add(transformedItem);
        }
        return result;
    }
}
let numList2 = new MyList();
numList2.add(10);
/**
 * Here it doesnot make sense to want to use a generic of type
 * let books = MyList<{id : number, title : string, isbn : string, cost : number}>()
 *
 * This is a very specific type and not generic at all! It makes more sense
 * to use an interface to connect the different books under a structured
 * set of common attributes!
 * We choose an interface here instead of a class given that we are just
 * creating a link with attributes and not creating methods for books and things
 * like this!
 *
 * however technically you could also create a book class if you wanted to!
 * But in this case since we are then passing that type for the generic class
 * it makes more sense to use an interface to create a new type and then
 * have that type be sent into the generic class where it will create a list
 * using the properties defined within the interface Book to then create a list
 * of books that have those shared attributes defined in the interface Book!
 */
let books = new MyList();
books.add({ id: 1, title: 'Angular', isbn: '34723198474', cost: 59.99 });
books.add({ id: 2, title: 'React', isbn: '34682649789', cost: 49.99 });
books.add({ id: 3, title: 'TypeScript', isbn: '809038388', cost: 29.99 });
books.add({ id: 4, title: 'Angular', isbn: '809038399', cost: 19.99 });
console.log("Books Data: ", books);
let cheapBooks = books.filter(book => book.cost < 50);
console.log(cheapBooks.values);
// let productsComparerByValue = function(p1: number, p2: number){
//     var p1Value = p1.cost * p1.units,
//         p2Value = p2.cost * p2.units;
//     if (p1Value < p2Value) return -1;
//     if (p1Value > p2Value) return 1;
//     return 0;
// }
// sort(productsComparerByValue);
// console.table(products)
let discountedBooks = books.map(book => ({ title: book.title, cost: book.cost * 0.9 }));
console.log("Discounted Books");
console.log(discountedBooks);
/**
 * Give a try in implementing groupBy
 */
// let grouped = books.group(function(book){
//     console.log(book.title)
//     return book.title;
// })