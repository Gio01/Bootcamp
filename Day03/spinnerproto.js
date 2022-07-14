function Spinner(){
    this.counter = 0;
}

Spinner.prototype['up'] = function(){
    return this.counter++;
};

Spinner.prototype['down'] = function(){
    return this.counter++;
};

/**
 * Here we need to use this.counter in order to be able to have access to the
 * instance object's counter! Otherwise return counter will not be able to have
 * access to the counter since the functions are outside of the function Spinner
 * so they do not have access to the obj's counter attribute!
 * They are in different scopes so we need the this to refer to the instance
 * 
 * Now we have an issue: we are ot allowing public access to the spinner counter
 * by calling spin.counter = 100
 * which means that we do not have privacy! 
 * 
 * Advantage of doing this: We are able to use memory efficiently because 
 * we are not replicating the same functions within each instance obj we create!
 * 
 * Disadvantage: we loose privacy in how to create a private counter variable
 * because now we cannot create closures!!!! 
 * 
 * Meaning closures have a cost in the not using memory efficiently but we are
 * able to have privacy so we need to think about when to use closure because
 * too many closures will lead to memory cost!!
 */

var spin = new Spinner();


//---------------------------------

function Spinner2(){
    this.__counter__ = 0;
}

Spinner.prototype['up'] = function(){
    return this.__counter__++;
};

Spinner.prototype['down'] = function(){
    return this.__counter__++;
};


var spin2 = new Spinner2();

/**
 * Now we have a convension to tell the user that we are wanting to treat a property
 * as private when in fact it actually is public
 * 
 * By using __counter__ we are telling the user that this is supposed to be 
 * private and not supposed to be treated as public!! This is why __proto__ has
 * this convention! It is meant to be treated as private but it is public!!
 * 
 * A reason for this is because using closures (the only way to get private attributes)
 * is very costly so there are attributes with thie __ __ notation instead! 
 * 
 * Another convention you can use is $$ $$ 
 * 
 * So if you see a library using any of these conventions, you should not be using
 * them because you can then cause some problems with the code although technically
 * you are able to access them!!
 * 
 */