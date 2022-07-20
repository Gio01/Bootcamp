"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
//default exports
//there can only be ONE SINGLE default export from a module
const utils = {
    isEven: (n) => n % 2 === 0,
    isOdd: (n) => n % 2 === 1
};
exports.default = utils;
/**
 * Basically anything you add the export to will all be placed into an object
 * which then can get imported into any other file to have access to those
 * exported properties!!
 *
 * You can also export A SINGLE deafult export and you can add anything inside
 * of it to then import into other files!
 */ 
