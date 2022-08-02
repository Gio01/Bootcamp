const { Subject, interval} = require('rxjs');
const { switchMap, filter } = require('rxjs/operators')

const timer$ = interval(1000)

const switch$ = new Subject()

const subscription = switch$
    .pipe(
        filter(toggle => toggle),
        switchMap(toggle => timer$)
    )
    .subscribe(time => console.log('ms passed:' + time))

//Simulation
setTimeout(() => switch$.next(true), 1000)
setTimeout(() => switch$.next(false), 4000)
setTimeout(() => console.log('---------'), 5500)

setTimeout(() => switch$.next(true), 6000)
setTimeout(() => switch$.next(false), 7000)

//setTimeout(() => switch$.next(true), 1000)
setTimeout(() => subscription.unsubscribe(), 10000)

/**
 * When a new inner Observable is emitted, switchMap stops emitting items from the 
 * earlier-emitted inner Observable and begins emitting items from the new one.
 * 
 * Meaning that the count is reset as we are starting a new observable with a new timer!
 * 
 * 
 * with concatMap we are not re-subscribing at each false we call but rather we stop the
 * interval and then are then just starting it again from where it was before! 
 */