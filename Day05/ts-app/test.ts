console.log("Hello There! How are you?");

let no : number = 10;

function add(x : number, y : number) : number{
    return x + y;
}

let result:number = add(100, 200)

let x : any; //this is a variable where you can assign it any type! 
//it can be a string, an object, and array or whateever!

x = 10;
x = 'string'
x = true
x = {}
x = []

let y; //if you do not give it a type then it will be of type any!
//however we should declare the types as that is the whole point of using TS
//otherwise we would just be using JS. So here just say ley y : any;

function greet(name : any) {
    console.log("Hi", name);
}

greet("Gio")

//type inference