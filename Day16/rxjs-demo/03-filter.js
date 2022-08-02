const {from} = require('rxjs')
const {filter} = require('rxjs/operators')

let oberservable$ = from([1,2,3,4,5]);

let filteredObservable$ = oberservable$.pipe(
    filter(no => no % 2 === 0)
)

filteredObservable$.subscribe(no => console.log(no)) 
