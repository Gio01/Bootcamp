// import * as calc from './calculator';
// //this syntax will import the entire calculator.ts file/module

// console.dir(calc);

// import * as calc from './calculator';
// const {add} = calc;
// console.log(add(100, 200))

// import {add} from './calculator';
// //here we are importing a single function! However this can be any function
// //or even objects!  However with the first version we can import everything!
// console.log(add(100, 200))


//importing the default exported entity
// import UtilsObj from './calculator'
// console.log(UtilsObj)


//you can both import the modult and also the default export
import utilsObj, {add} from './calculator'
console.log(utilsObj.isEven(2))
console.log(add(100,200))

