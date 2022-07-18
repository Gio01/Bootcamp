"use strict";
//this code shows us how we can create an abstract class and have the 
//interface be used by it doe then be able topass the area and perimeter
//methods to the rectabgle and circle classes which inherit from the ShapeBase
//abstract class and also since we did now include the area and perim methods
//in the ShapeBase which is the highest in the hierarchy then we do not need 
//to also implement the SHape interface within the rectangle and the circle class!
class ShapeBase {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends ShapeBase {
    constructor(name, height, width) {
        super(name);
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return 2 * (this.height + this.width);
    }
}
class Circle extends ShapeBase {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    area() {
        return (22 / 7) * this.radius * this.radius;
    }
    perimeter() {
        return 2 * (22 / 7) * this.radius;
    }
}
function printStats(obj) {
    console.log('Name = ', obj.name);
    //let objAsShape = (obj as unknown) as Shape;
    console.log("Area = ", obj.area());
    console.log("Perimiter = ", obj.perimeter());
}
let box = new Rectangle("rectangle", 10, 11);
/*
console.log("Area = ", box.area())
console.log("Perimiter = ", box.perimeter())
*/
printStats(box);
let circle = new Circle("circle", 12);
/*
console.log("Area = ", circle.area())
console.log("Perimiter = ", circle.perimeter())
*/
printStats(circle);
//let sb : ShapeBase = new ShapeBase()
