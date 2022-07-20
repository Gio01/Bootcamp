"use strict";
/**
 * generics is a manner in which we can use an api or a set of methods
 * where we are able to generalize the manner so that we can specify the
 * types we want to use at a later time
 */
let list = new Array();
class NumberList {
    constructor() {
        this.list = new Array();
    }
    push(no) {
        this.list.push(no);
    }
    pop() {
        return this.list.pop();
        //we need as number so that we are able to return a number as the type
    }
}
class StringList {
    constructor() {
        this.list = new Array();
    }
    push(no) {
        this.list.push(no);
    }
    pop() {
        return this.list.pop();
        //we need as number so that we are able to return a number as the type
    }
}
/**
 * Here the only thing that is changing is the type! however the functinality
 * is the same!
 */
class List {
    constructor() {
        /**
         * This T tells the compiler that this class will deal with data of type T.
         * The type of the data will be specified when the user uses the class
         * via the new List() notation
         */
        this.list = new Array();
    }
    push(no) {
        this.list.push(no);
    }
    pop() {
        return this.list.pop();
        //we need as number so that we are able to return a number as the type
        //otherwise we will return a value of type any!! Basically everything is
        //of type any unless if we specify it and controll it! 
    }
}
//so here we can use generics so that we can dynamically use the same class List
//generic while being able to specify the type while using that generic instead
//of needing to create two seperate classes just to have different types!
let numberList = new List(); //should be restricted to only handle numbers
let stringList = new List(); //should be restricted to only handle strings
let nos = new Array();
function addItem(list, item) {
    //console.log([1,2]) same idea here! 
    return [...list, item];
    //here we are returning the entire list from 0 to the end and then also
    //adding the item to the last of the array
}
let nums = [10, 20, 30];
/**
 * techinally here we should be doing the following so that the function knows
 * what type of data is being sent into it but the TS compiler is able to
 * get the type infered by the array of numbers (nums) that we are giving into the
 * addItem function !
 *
 * Type inferrence for generics
 *  - In this manner we do not need to always be writing the type as it can be
 *      simply infered by the TS compiler!
 *
 * let newNums = addItem<number>(nums, 40)
 * newNums = addItem<number>(newNums, 'something')
 */
let newNums = addItem(nums, 40);
//newNums = addItem(newNums, 'something') //should not be allowed since we 
//are wanting the list to have items of the same type
console.log(newNums);
let prodNames = ['Pen', 'Pencil', 'Marker'];
let newProdNames = addItem(prodNames, 'Scribble-Pad');
//newProdNames = addItem(newProdNames, 1000) //should not be allowed
console.log(newProdNames);
//write a generic find function that will return the first item that 
//satisfies the given criteria (predicate)
function myfind(list, predicate) {
    //we need to return an undefined as well because we may not have found an item!
    for (let i = 0; i < list.length; i++) {
        if (predicate(list[i])) {
            return list[i];
        }
    }
    return undefined;
}
function myfilter(list, predicate) {
    var result = new Array;
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i])) {
            result.push(list[i]);
        }
    }
    return result;
}
/**
 * You can actually pass in multiple types into some function and to do this
 * what you can do is something like
 * function myfilter<T, T2> where T2 is the other type you also want to be
 * able to handle! These two types will be defined once you use the generic!
 */
let products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];
let predicate = function (item) {
    //console.log(item)
    //console.log(item.category === 'grocery')
    return item.category === 'grocery';
};
let grocery = myfind(products, predicate);
console.log("first item found that matched: ", grocery);
let cost = function (item) {
    return item.cost < 50;
};
let filtercost = myfilter(products, cost);
console.log("Filter by cost: ", filtercost);
let num = [3, 1, 4, 2, 5, 6];
function map(sourceList, transformationFn) {
    //the types does not have to be T you can actually write srcType and targetType
    let result = new Array;
    for (let v of sourceList) {
        let transformVal = transformationFn(v);
        //console.log(typeof transformVal)
        result.push(transformVal);
    }
    return result;
}
function transformationFn(item) {
    if (item % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
let even = map(num, transformationFn);
console.log(even);
function transformationFn2(item) {
    return item * 10;
}
let out = map(num, transformationFn2);
console.log(out);
function sortByComparer(list, comparer) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 1; i < list.length; i++) {
            if (comparer(list[i], list[j]) > 0) {
                [list[i], list[j]] = [list[j], list[i]];
            }
        }
    }
}
function sortByAttributeName(list, attrName) {
    //here attrName is always a string so that is why we do not use T
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 1; i < list.length; i++) {
            if (list[i][attrName] > list[j][attrName]) {
                /**
                 * Here we get an error because it is possible for someone to
                 * give into the attrName some string propoerty that does not
                 * exist within the properties of the objects we are sending in the
                 * list
                 * ex: products = [] {id, name, cost}
                 * we can call the attrName with these three properties
                 * but if it is not one that exists then we cannot do that since
                 * the key does not exist!!
                 */
                [list[i], list[j]] = [list[j], list[i]];
            }
        }
    }
}
sortByAttributeName(products, 'id');
/**
 * So automatically TS is able to pick out all of tha attributes within
 * the objects and hence it knows what properties it has which means that
 * when we do Key extends of T it basically thinks of T as being the type of
 * the products which is defined by those attributes and hence has immediate
 * access to them and can pick them out. That is why this works and we can
 * limit the possible attrName values to those only within the attributes of the
 * product arrays of those objects!! in this manner now we do not have an issue
 * for if someone tries to index to a property that does not exist within the
 * keys/properties within the products array!!
 */
function printProps(item, listAttr) {
    //we use void here since we are not returning anything and only printing out to the console
    for (let i = 0; i < listAttr.length; i++) {
        console.log("Name: ", listAttr[i], ", Value:", item[listAttr[i]]);
    }
}
let pen = { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' };
printProps(pen, ['id']);
/**
 * Name: id, Value : 6
 */
printProps(pen, ['cost', 'units']);
/**
 * Name: cost, value: 50
 * Name: units, Value: 20
 */
