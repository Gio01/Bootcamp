const {from} = require('rxjs')
const {takeWhile, skipWhile} = require('rxjs/operators')

const oberservable$ = from([0,0,0,1,0])
console.log('TakeWhile')

