//same as the primeMem file! Except this is his solution to this 
function memoize(pureFn){
    var cache = {}; //becomes private because of closure!
    
    return function(no){
        if (no in cache)
            return cache[no]; //if in the cache then it will return/exit the function

        console.log('processing ', no)
        console.log(pureFn)

        for(var i = 0; i<arguments.length; i++){
            console.log("initial pureFn param val args in memoize: ", arguments[i], "=> ", arguments)
            cache[arguments[i]] = pureFn(arguments[i]) 
            /**Here what we are doing is looking through the many arguments that are being passed in the arguments 
             * in the form of a like array type. In this manner we iterate through each element and call the
             * checkPrime method on each run to then be able to add it into the cache with the corresponding
             * true or false value
             */
            console.log(cache)
        }
        console.log("num of args ", arguments.length)

       // cache[no] = pureFn(no) //this is because pureFn the param here 
        //is in refernce to the checkPrime or the checkOddsOrEven that is 
        //being passed as an argument to the memoize function! 
        console.log("cache: ", cache[no], "func: ", pureFn(no), " value: ", no)
        return cache
    }
}

function checkPrime(no){
    
    for ( var i = 2; i <= (no/2); i++ ){
        if (no % i === 0)
            return false;
    }
    return true
}

var isPrime = memoize(checkPrime)


function checkOddOrEven(no){
    return no % 2 === 0 ? 'even' : 'odd';
}
var isOddOrEven = memoize(checkOddOrEven);

//modify the memoize function to allow for the user to pass multiple
//arguments and not just one! 
// My answer: I think we need to use that call() in order to be able to pass
//an array as the arguments and just incrememnt throuh the arg array! 

/**
 * Again: arguments are array like and hence because of that we can sort of use
 * them like arrays but they do not have the same methods as arrays and hence
 * in order to do this we need to invoke/call array functions with the context
 * of the arguments so that they are treated as an array! 
 */