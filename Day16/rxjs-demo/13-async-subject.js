const {AsyncSubject} = require('rxjs');

const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(val => {
    console.log('value recieved: ', val);
})

asyncSubject.next('first value')
asyncSubject.next('second value')
console.log('sent 2 values to the subject')
asyncSubject.complete()

/**
 * This is like the last() operator for the Subjects!! This will return to 
 * latest (the last) value that was emitted!! In this case when we call complete()
 * it will return the last added value which was next('second value')!
 */