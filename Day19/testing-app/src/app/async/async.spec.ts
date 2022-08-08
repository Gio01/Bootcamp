import { fakeAsync, flush, flushMicrotasks } from "@angular/core/testing";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
/**
 * By setting this timeout we can let things run asynchronously and 
 * then after this timeout when we would hope the data has been processed
 * for the result is when jasmine will run the tests
 */

fdescribe('Async Tests', () => {
    describe('Testing callbacks', () => {
        function addAsync(x : number,y : number, callback : (result : number) => void) {
            setTimeout(() => {
                const result = x + y;
                callback(result);
            }, 6000);
        }

        it('should add the given numbers', (done) => {
            const 
                n1 = 100,
                n2 = 200,
                expectedResult = 300;

            addAsync(100,200, (result) => {
                expect(result).toBe(expectedResult);
                done();
            })
        })
    })

    
/**
 * Here what we are doing is that jasmine will wait until we call the done()
 * callback for jasmine to run the test on the async function addAsync() which
 * contains the setTimeout() and we return the result in the callback(result)
 * and then we are able to get that in the result of the param in addAsync
 * to where we run the test with expect(result)
 * 
 * Once the result is recieved then we can run the test and jasmine will 
 * know this by running the done() after the expect()
 * 
 * 
 */


    function dummyAsync(timeout : number, callback : () => void){
        setTimeout(() => {
           callback();
       }, timeout);
   }
   it('should test multiple async operations', fakeAsync(() => {
       let test1 = false;
       dummyAsync(2000, () => {
           test1 = true
       });

       let test2 = false;
       dummyAsync(4000, () => {
           test2 = true
       });
       
       flush() //wait for all the async operations to complete before the assertions are executed
       
       expect(test1).toBeTrue()
       expect(test2).toBeTrue()
   }))

   /**
    * Here now we ran into an issue where jasmine will not be able to 
    * detect that there are two async operations running and hence if we 
    * tried to use the done() twice the second async operation will not 
    * be processed!
    * 
    * A manner in which we can handle this is to use Angulars' fakeAsync
    * and then the flush() method
    * what it does is that the fakeAsync will wrap all of the async operations
    * that we need to do and the flush() will wait until the async operations 
    * have completed running and only then we can use the expect()
    * so that jasmine can run the tests on all of the async operations! 
    */


    describe('Testing promises', () => {
        it('should test after resolving a promise', fakeAsync(() => {
            let test1 = false;

            let promise = new Promise((resolveFn, rejectFn) => {
                test1 = true
                resolveFn(100)
            })

            expect(test1).toBeTrue();
        }));

        it('should test promises & timeout', fakeAsync(() => {
            let counter = 0;
            Promise
                .resolve()
                .then(() => {
                    counter = 10;
                    setTimeout(() => {
                        counter += 1;
                    }, 2000);
                })

            expect(counter).toBe(0);
            flushMicrotasks() // wait for the promise to be resolved / rejected
            /**
             * we need the flushMicrotasks in order to be able to wait for the 
             * Promise microtask queue to do its job. 
             */
            expect(counter).toBe(10);
            flush();//to then wait for everything in the job schuduler queue to be done
            expect(counter).toBe(11);
        }))
    });
        
})