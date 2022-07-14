/**
 * This is the solution radio function that he created for the certralized radio problem! 
 */
var radio = (function(){
    
    var topics = {}

    function radio(topicName){
        topics[topicName] = topics[topicName] || new Topic(topicName);
        return topics[topicName];
    }

    function Topic(topicName){
        this.name = topicName;
        this.__subscriptions = [];
    }

    Topic.prototype.subscribe = function(fn){
        this.__subscriptions.push(fn);
        return this;
    }

    Topic.prototype.broadcast = function(){
        var subscriptions = this.__subscriptions;
        for (var i = 0; i < subscriptions.length; i++){
            var fn = subscriptions[i];
            fn.apply(this, arguments); //take all the args from broadcast and then use them
            //to call the fn function
        }
        return this;
    }

    Topic.prototype.unsubscribe = function(fn){
        var subscriptions = this.__subscriptions;
        var idx = subscriptions.indexOf(fn);
        subscriptions.splice(idx, 1)
        return this;
    }

    return radio;
})();


function productRemoved(){
        console.log('product removed');
    }


radio('product-removed')
    .subscribe(productRemoved)
    .broadcast()
    .unsubscribe(productRemoved)

    //the reason we can chain it is because we are returning this same object and can call 
    //many methods on the same object (using this is the key here!)

radio('product-removed')
    .subscribe(productRemoved)
    .broadcast('pen', '2 days ago')

    radio().subscribe(productRemoved).broadcast('pen', '2 days ago')
   