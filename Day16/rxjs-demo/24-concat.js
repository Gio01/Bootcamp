const { concat, of, Subject } = require('rxjs');
const { delay } = require('rxjs/operators')

const httpRequest$ = new Subject();

const firstObs$ = of('btn click').pipe(delay(2000));

concat(firstObs$, httpRequest$).subscribe(val => {
    console.log(val);
})

setTimeout(() => {
    httpRequest$.next('Response from server');
}, 3000)

/**
 * With concat we arecreating an order for how to subscribe to observables!! 
 * 
 * In this case first the firstObs$ observable will be subscribed to and then the 
 * httpRequest$ observable will be subscribed to!!
 * 
 * Note: if the setTimeout has a time of 1000 ms then we will not see Response from server
 * because it happened at 1000 and firstObs$ has a delay of 2000 which means that 
 * it will not be able to print out the response from server as that would have 
 * technically already happened so it will not be registered in the concat in time! 
 * 
 */