//This is a test TS file in order to see how I can write the same code for the
//spinner.js in Day 2 but with using TS instead!

function Spinner(){
    let counter:number = 0;

    //the spinner will just need to be able to increase the counter and decrease
    //now the goal is to do this in a manner where it is private!
    //in JS we needed to do a closure but here can we just say private?
    //I guess that only works within a class and not just creating private
    //var so we need to do a closure as well

        this.up = function () {
            return counter++;
        };
        this.down = function () {
            return counter--;
        };
    

    //I need to ensure to name the functions! if not using up will not be
    //recognized when doing spinner.up()
    //we also need to ensure to return from within the up and down so that 
    //we can see those changes in the outside! think of it like you hand
    //of that data back up so without doing that you call the function but never
    //give it back up so the second return will not be able to give anything
    //back to the spinner variable!
   
}
let spin = new Spinner();

/**
 * Notes from this: I need to practice some more JS and feel confident in my
 * JS because things are a bit diff in TS in the manner you need to tell
 * the compiler the types! 
 * 
 * Work on:
 *  This!!! To be able to better understand whom it refers to in diff cases
 */