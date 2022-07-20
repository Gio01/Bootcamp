//index signature
interface Product {
    id: number,
    name: string,
    cost: number,
    units: number, 
    category: string
}
//a product is a type with the keys as strings and values as strings or as numbers
//as based on the interface signature above!
let pencil = {id : 9, name : 'Pencil', cost : 50, units : 70, category : 'stationary'};


/**
 * Now what if we wanted to add the attributes within the product? 
 * what we can do is create a generic manner of the product interface so that 
 * we can be more flexible and be able to add things into that interface to 
 * dynamically be able to add properties! 
 *
 */

interface ProductType{
    [key: string] : number | string
}

/**
 * In this manner now we can create new keys/attributes with either the number 
 * or string type!! 
 * 
 * so now we have a very generic and flexible productType interface which 
 * we can use to dynamically add properties to objects
 */
 let pencilObj: ProductType = {id : 9, name : 'Pencil', cost : 50, units : 70, category : 'stationary',
    manufacturer: 'IBM', discount: 10};

console.log(pencilObj)

interface EmployeeType {
    id: number,
    name: string,
    city: string
}

interface ReadOnlyType {
    readonly id: number,
    readonly name: string,
    readonly city: string
}
//in this manner we can only read to these values and not change their values!
//so we would ot be able to change the pencilObj id of 9
//however how can we make this in a generic manner so that we do not need to 
//rewrite so many interfaces that will have the same readobly attributes

type ReadOnlyType2<T> = {readonly [key in keyof T]: T[key]}
//type ReadOnlyType<T> = {readonly [key in keyof T]: T[key]}

let readOnlyEmployee : ReadOnlyType2<EmployeeType> = {
    id: 100,
    name: 'Gio',
    city: 'Houston'
}

function readOnly<T>(obj: T): ReadOnlyType2<T> {
    return Object.freeze(obj)
}

let readOnlyEmployee2 = readOnly({
    id: 100,
    name: 'Gio',
    city: 'Houston'
})

//instead of also using interfaces with generics to do readonly we can simply
//use the Object.freeze method in this manner to dynamically stop the changing
//of certain attributes so that they are read only


//How can we make things optional in TS?
interface Address {
    doorNo: string,
    line1: string,
    line2?: string, 
    city: string,
    zipcode: number
}

let address: Address = {doorNo: '102-A', line1: '', city: 'Houston', zipcode: 77023}
/**
 * We get an error because we did not give the obj a line2 value but we can 
 * make that optional by adding a ? after the property in the interface!
 */


type PartialType<T> = { [key in keyof T]?: T[key] }

let address2: Address = {doorNo: '102-A', line1: '', city: 'Houston', zipcode: 77023}
let address3: PartialType<Address> = {doorNo: '102-B',  city: 'Houston', zipcode: 77023}
/**
 * In address3 we are creating optional properties to use from the existing Address interface! 
 * instead of using ? on all of the properties we can do this to dynamically change the 
 * properties to be optional for that given variable! 
 * 
 * here we have the partialType of the address Type and the added ? in the partial
 * type is what will progamatically add the ? to all of the keys within the
 * interface and hence make properties become optional!!
 */
console.log(address2)
console.log(address3)
//console.log(typeof AddressType)

/**
 * Since there was a need for doing PartialTypes, instead a keyword partial
 * was created to do this for us automatically!
 * 
 * Here the below we have the Partial Update of the Address where we only 
 * need to speicify some of them as all of the properties are optional! 
 */
let cityUpdate: Partial<Address> = {
    city: 'New York'
}

console.log(cityUpdate)

/**
 * Built in utilities for types
 * 
 * Partial
 * ReadOnly
 * NonNullable
 * Omit (i want all the attributes expect the ones I give to it)
 */

type Nullable<T> = { [key in keyof T] : T[key] | null}
//here this types simply goes into the keys and then allows you to either
//give it a value or give it null

let nullableAddress: Nullable<Address> = {
    doorNo: '102-A',
    line1: null,
    city: 'Houston',
    zipcode: 77023 
}

//4. Pick (creating a subtype from an existing type)
//ShortAddress = ONLY doorNo, city, zipcode
type ShortAddress = Pick<Address, 'doorNo' | 'city' | 'zipcode'>
/**
 * This shortaddress type will now only have doorno, city, and zipcode instead
 */

// type CustomPick<T, K extends keyof T> = {
//     [key in K] : T[key]
// }
// this is our own implementation of Pick
// type ShortAddress2 = CustomPick<Address, 'doorNo' | 'line1'>


//5. Omit (creating a subtype will all attributes excepts the given ones)
type AddressLines = Omit<Address, 'doorNo' | 'city' | 'zipcode'>

type omittedAddress = Omit<Address, | 'city' | 'zipcode'>

//6. Record (creates a type that contains attributes of some type you give it)
type Dummy = Record<'m1' | 'm2' | 'm3', string>

//this is for when data from the html page is being sent to the backend in text
//string format and then after that we will need to type cast to get 
//things like zipcode as a number 

//type AddressInput = Record<'doorNo' | 'line1' | 'line2' | 'city' | 'zipcode', string>

type AddressInput = Record<keyof Address, string>
//this will dynamically create a type of all the attributes of Address as a string!


//7. Extract (can extract common attributes from the  other types)

interface Animal {
    name: string,
    sound: string,
    age: number
}

interface Human {
    name: string,
    nickname: string,
    age: number
}
//here we are getting the common attributes from the Animal and Human interfaces!
type LivingThing = Extract<keyof Animal, keyof Human>

type NameType = Record<LivingThing, string>

//8. Exclude (takes all the properties from the given type except the specified one)
//here exclude only return to you the attributes and the entire type like with Omit!
type Ageless = Exclude<keyof Human, 'age'>

//Utility Type referece: www.typescriptlang.ord -> utility types

