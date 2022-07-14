/**
 * Bind allows you to set the context of some function so that its properties
 * always refer to one object
 */

function bind(context){
    return this.apply(context, arguments)
}

//func = func.bind(emp)
greet = greet.bind(emp)