"use strict";
// import * as calc from './calculator';
// //this syntax will import the entire calculator.ts file/module
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const calculator_1 = __importStar(require("./calculator"));
console.log(calculator_1.default.isEven(2));
console.log((0, calculator_1.add)(100, 200));
