export function add(x: number, y: number) : number{
    return x + y
}

export function subtract(x: number, y: number) : number{
    return x - y
}

//default exports
//there can only be ONE SINGLE default export from a module

const utils = {
    isEven: (n: number) => n % 2 === 0,
    isOdd: (n: number) => n % 2 === 1
}

export default utils;

/**
 * Basically anything you add the export to will all be placed into an object
 * which then can get imported into any other file to have access to those
 * exported properties!!
 * 
 * You can also export A SINGLE deafult export and you can add anything inside 
 * of it to then import into other files!
 */