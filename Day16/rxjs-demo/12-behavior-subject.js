/* 
    Subject = Observable + Observer
*/

const { BehaviorSubject }= require('rxjs');

//const dataSubject = new Subject();

const dataSubject = new BehaviorSubject();

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-1', no));
}, 1000);

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-2', no));
}, 5000);

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-3', no));
}, 10000);

setTimeout(() => {
    dataSubject.next(10); //subscriber-1
}, 2000);

setTimeout(() => {
    dataSubject.next(20); //subscriber-1 & subscriber-2
}, 6000);

setTimeout(() => {
    dataSubject.next(30); //subscriber-1, subscriber-2 & subscriber-3
}, 12000);

/**
 * BehaviorSubject() is quite useful for when we want to react to certain user
 * behaviors and want to respond to them! 
 * 
 * So here what happens is that we will output the initial values oppon when somone
 * subscribes and so here we have an subscriber-1 undefined because at this point
 * there hasnt been anything added by next()!
 * 
 * After data is added it is when it gets printed out in the order of the current
 * existing subscribers! 
 */