const {Observable} = require('rxjs')

const intervalObservable = new Observable((subscribe) = (subscribedObserver) => {
    try{
        let ct = 0; 

        setInterval(() => {
            subscribedObserver.next(ct)
            ct++
        }, 1000)

        /**
         * The set interval function adds a delay on each execution call! so basically
         * it is a manner in which setTimeout can work for many repeaded function calls
         * and not just a single call of a function!! This will continue forever!!
         */

        // for (let i = 0; i < 100; i++){
        //     setTimeout(() => {
        //         subscribedObserver.next(i)
        //     }, 1000 * i)
        // }
        /**
         * In doing this we can add a timeout on each iteration call in the
         * for loop and hence we can create an interval Observable in this manner.
         * Otherwise without adding the 1000 * i we are only going to causing a delay 
         * on the first iteration and that will be it! In this manner we can also now
         * cause a delay on each iteration call! 
         * 
         * so for 0 we delay for 0 sec,
         * 1 - delay for 1 second
         * 2 - delay for 2 seconds
         * 
         * so we keep increasing the delay time by i so that this increment will
         * cause the next to be by a factor of i that will then cause for the printing
         * out to be in an interval fassion. 
         * 
         */
        
        
    }
    catch (err){
        subscribedObserver.error(err)
    }
});

const observer = {
    next(val){
        console.log('next: ', val)
    },
    error(err){
        console.log('error from the Observable: ', err)
    },
    complete(){
        console.log('all data recieved')
    }
}

intervalObservable.subscribe(observer)