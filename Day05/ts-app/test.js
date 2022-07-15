"use strict";
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
