const { merge, of, Subject } = require('rxjs');

const keyDown$ = new Subject();
const click$ = new Subject();

const staticData$ = of('default event')

merge(staticData$, keyDown$, click$).subscribe(val => {
    console.log(val);
})

setTimeout(() => {
    keyDown$.next('Key Pressed Event: Ctrl');
}, 1000)

setTimeout(() => {
    keyDown$.next('Key Pressed Event: C');
}, 2000)

setTimeout(() => {
    click$.next('Mouse Click Event: Left Click');
}, 2000)

/**
 * merge can be used to get all of the output from the observables that we are subscribed
 * to and combine/merge them together! 
 */