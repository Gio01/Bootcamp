"use strict";
//a product is a type with the keys as strings and values as strings or as numbers
//as based on the interface signature above!
let pencil = { id: 9, name: 'Pencil', cost: 50, units: 70, category: 'stationary' };
/**
 * In this manner now we can create new keys/attributes with either the number
 * or string type!!
 *
 * so now we have a very generic and flexible productType interface which
 * we can use to dynamically add properties to objects
 */
let pencilObj = { id: 9, name: 'Pencil', cost: 50, units: 70, category: 'stationary',
    manufacturer: 'IBM', discount: 10 };
console.log(pencilObj);
//type ReadOnlyType<T> = {readonly [key in keyof T]: T[key]}
let readOnlyEmployee = {
    id: 100,
    name: 'Gio',
    city: 'Houston'
};
function readOnly(obj) {
    return Object.freeze(obj);
}
let readOnlyEmployee2 = readOnly({
    id: 100,
    name: 'Gio',
    city: 'Houston'
});
let address = { doorNo: '102-A', line1: '', city: 'Houston', zipcode: 77023 };
let address2 = { doorNo: '102-A', line1: '', city: 'Houston', zipcode: 77023 };
let address3 = { doorNo: '102-B', city: 'Houston', zipcode: 77023 };
/**
 * In address3 we are creating optional properties to use from the existing Address interface!
 * instead of using ? on all of the properties we can do this to dynamically change the
 * properties to be optional for that given variable!
 *
 * here we have the partialType of the address Type and the added ? in the partial
 * type is what will progamatically add the ? to all of the keys within the
 * interface and hence make properties become optional!!
 */
console.log(address2);
console.log(address3);
//console.log(typeof AddressType)
/**
 * Since there was a need for doing PartialTypes, instead a keyword partial
 * was created to do this for us automatically!
 *
 * Here the below we have the Partial Update of the Address where we only
 * need to speicify some of them as all of the properties are optional!
 */
let cityUpdate = {
    city: 'New York'
};
console.log(cityUpdate);
//here this types simply goes into the keys and then allows you to either
//give it a value or give it null
let nullableAddress = {
    doorNo: '102-A',
    line1: null,
    city: 'Houston',
    zipcode: 77023
};
//Utility Type referece: www.typescriptlang.ord -> utility types
