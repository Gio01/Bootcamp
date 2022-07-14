let prime = (function(){
    
    let mem = {};

    function isPrime(n){
        //console.log('processing => ', n)
        //console.log(n in mem )
        if(n in mem === true){
            console.log("From memory: ", n ,"=>", mem[n])
        }
        else{
            console.log("Running Prime Calc for: ", n)
            for(var i = 2; i <= n/2; i++){
                if(n % i === 0){
                    mem[n] = false;
                }
            }
            mem[n] = true;
        }
    }
    return isPrime //here since we want to have access to the isPrime! We can 
    //simply return the entire function to then be able to access and then check
    //to see if the number is prime or not 
    //we could have also written it as return function() {}
})()

let prime2 = (function(){
    
    let mem = {};

    return function (n){
        //console.log('processing => ', n)
        //console.log(n in mem )
        if(n in mem === true){
            console.log("From memory: ", n ,"=>", mem[n])
        }
        else{
            console.log("Running Prime Calc for: ", n)
            for(var i = 2; i <= n/2; i++){
                if(n % i === 0){
                    mem[n] = false;
                }
            }
            mem[n] = true;
        }
    }

    //we could have also written it as return function() {}
})()

