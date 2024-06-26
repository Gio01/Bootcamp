const { Observable } = require('rxjs');

const observableObj = new Observable((subscribe = (subscribedOberver) => {
    try {
        console.log('sending 1')
        subscribedOberver.next(1);
        console.log('sending 2')
        subscribedOberver.next(2);
        console.log('sending 3')
        subscribedOberver.next(3);
        console.log('sending complete')
        subscribedOberver.complete();
    } catch (err) {
        subscribedOberver.error(err);
    }
}))

// observableObj.subscribe(
//     val => console.log(val), 
//     err => {
//         console.log('error from observable : ', err)
//     },
//     () => console.log('all data received')
// );

const observer = {
    next(val) {
        console.log(val);
    },
    error(err){
        console.log('error from Observable: ', err);
    },
    complete(){
        console.log('all data recieved')
    }
};

observableObj.subscribe(observer)

//the observer defines what it is that we will do to handle the data being streamed to us