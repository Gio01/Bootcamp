/**
 * Create a constructor function 'Spinner'
 * 
 * var spinner = new Spinner()
 * spinner.up() => 1
 * spinner.up() => 2
 * 
 * spinner.down() => 1
 * spinner.down() => 0
 * 
 * we had initially solved this problem with the immediately invoked func!
 */

function Spinner(){
    //private
    var counter = 0;

    //public
    this.up = function(){
        return counter++;
    };
    this.down = function(){
        return counter--;  
    };
}

/**
 * The problem here is that when we assign things into the this.counter here
 * we are adding values into the scope of the object which is public so instead
 * we need to create a variable and essentially what we have now is that we have 
 * created a closure because we have the var counter here and is being called in 
 * the inner functions up and down where the Spinner function is the outer func
 * and hence we have a private variable that is not accessible in the global 
 * window scope anymore!! 
 * - so using this will put it into the scope of the object which is public! 
 * 
 * So within the function constructor if you want any private variable
 * you just need to create that property as a variable as we are then essentially
 * causing a closure and hence causes that variable to be private and not accessible
 * in the console/window/global scope anymore!
 */
var spin = new Spinner();
