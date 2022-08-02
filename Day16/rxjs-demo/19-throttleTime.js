const { Observable } = require('rxjs')
const { debounceTime, throttleTime } = require('rxjs/operators')

const observable$ = new Observable(observer => {
    setTimeout(() => observer.next('r'), 20)
    setTimeout(() => observer.next('x'), 30) 
    setTimeout(() => observer.next('j'), 50) // 1 
    setTimeout(() => observer.next('s'), 100) // 2
    setTimeout(() => observer.next(' '), 200) // 3
    setTimeout(() => observer.next('i'), 220) //
    setTimeout(() => observer.next('s'), 230) //
    setTimeout(() => observer.next(' '), 290) //4
    setTimeout(() => observer.next('a'), 300)
    setTimeout(() => observer.next('w'), 310)
    setTimeout(() => observer.next('e1'), 320)
    setTimeout(() => observer.next('s'), 320)
    setTimeout(() => observer.next('o'), 360) 
    setTimeout(() => observer.next('m'), 370)
    setTimeout(() => observer.next('e2'), 380)
})

observable$
    .pipe(throttleTime(50))
    .subscribe(console.log)
/**
 * debounced will wait until the time is passed to emit the most recent value that is inputted! 
 * 
 * throttleTIme emits a value from the input and then will ignore all other inputs 
 * within a certain time! 
 */