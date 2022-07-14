let spinner = (function(){
    let counter = 0;

    //Here we are returning an object which means that we can then 
    //access the properties in the same manner as you would an obj 
    //because the return is then assigned to spinner variable
    //which means that it will have properties up and down and note that 
    //it does not have counter as a property as that is only within the
    //wrapper function which means that it is not exposed to the console and 
    //hence cannot be accessed by the console! We can only access up and down!!
    //in this manner we have created a private variable (counter)!!

    return{
        up: function(){
            console.log(counter++);
        },
        down: function(){
            console.log(counter--);
        }
    }
})()
/**
 * Here since we wanted to do spinner.up() and spinner.down() we are returning
 * the object that has the two methods to then be able to call it so when 
 * doing the return we need to think what it is that we want access to inorder
 * to dertermine which it is that we want to return!! 
 */

//This is another way we can do it and is more straight forward!!
//This basically is the top solution! 
(function() {
    let counter = 0;

    let spinner = {
        up: function up(){
            counter++;
        },
        down: function down(){
            counter--;
        }
    }
    return spinner
})

//we can further simplify the previous code to get this and this is what we have.
//this now looks like spinner() func i wrote at the very top!!!
let spinner2 = (function() {
    let counter = 0;

    return {
        up: function up(){
            counter++;
        },
        down: function down(){
            counter--;
        }
    }
})

/**
 * the spinner should have two methods (functions within an obj)
 * 
 * spinner.up() => 1
 * spinner.up() => 2
 * spinner.up() => 3
 * 
 * 
 * spinner.down() => 2
 * spinner.down() => 1
 * spinner.down() => 0
 * spinner.down() => -1
 * 
 * IMPORTANT: the outcome of the spinner opeartions shoul not be able to be influeced
 * by the outside:
 * 
 * The following should not be possible
 * spinner.counter = 1000
 * spinner.up() => SHOULD NOT return 1001
 * 
 * OR
 * 
 * window.counter = 1000
 * spinner.up() => SHOULD NOT return 1001
 * 
 */