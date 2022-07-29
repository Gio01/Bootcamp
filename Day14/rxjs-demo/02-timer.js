const { interval } = require('rxjs')

let interval$ = interval(1000);
let subscription = interval$.subscribe(no => console.log('next : ', no));

//unsubscribing after 20 seconds
setTimeout(() => {
    subscription.unsubscribe();
}, 20000);

/**
 * Interval is an method that creats an observable that will give us an infinite number
 * of numbers within some specified time
 * 
 * So think of this Oberservable as this object that will cause for a sequence of 
 * events to occur which we can subscribe to, to make it run that sequence and then 
 * we can unsubscribe from that Observable to get that sequence of events to stop! 
 * 
 * So by using rxjs we can create an Observable or a sequence of events that will happen
 * by subscibing to that single Observable! Its compacts them into one observable obj 
 * instead of needing to write the events in a manner that are asynchronous like we did 
 * in the async-demo to not block user interaction! We can use rxjs to write the sequences
 * that we want and not need to worry about having the broswer not allowing user interaction
 * because the thread is busy doing something else!!
 */