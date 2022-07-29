import { Component } from "@angular/core";
import { Bug } from "./models/bug-type-object";
import { BugOperationsService } from "./services/bugOperation.service";
import * as moment from "moment";


@Component({
    selector: 'app-bug-tracker',
    templateUrl: './bugs.component.html',
    styleUrls: ['./bugs.component.css']
})
export class BugTrackerComponent{

    bugs: Array<Bug> = new Array();
    sortAttr : string = '';
    sortDsc: boolean = false;
    
    
    constructor(public bugOperations: BugOperationsService){
    //    this.bugs = this.bugOperations.getAll()
       //component -> operations -> storage
       //in this manner we have the link and then we are saying that we want 
       //to get all the data from localstorage and we put it into this
       //bugs array above and then use that to make the different UI 
       //manipulations!
       this.bugOperations.getAll()
       //console.log("initialize the app")

       /**
        * by having this getAll() in the constructor we will call getAll() the 
        * moment that this component is loaded onto the browser! 
        * so this will cause the service bugOperations to then be called!
        */
    }

    // add(newname: string){
    //     const newBug = this.bugOperations.add(newname); //we do not need this anymore 
    //as we are doing that now with the bugEdit component! 
    
    //     //this.bugs.push(newBug);//here is just so that we also have it within
    //     //the browser at the moment before refresh! After the refresh we will
    //     //call the storage again and get all the data from there!
    //     this.bugs = [...this.bugs, newBug]//creates a new array with all of the 
    //     //previous elements in the this.bugs array! (the current instance on the browser
    //     //before any reload happens!)
    // }

    // removedCount(): number{
    //     //the prob with this is that filter creates another array!
    //     // return this.bugs.filter(bug => bug.isClosed).length
    //     /**
    //      * Using reduce will use the same array and not return to us a copy! We just
    //      * use the original array and then create a var called result by which we
    //      * can increment based on whether the bug was marked red as removed or not! 
    //      */
        
    //     return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    // }

    // recieveSortAttr(attr: string){
    //     this.sortAttr = attr;
    //     this.bugs = [...this.bugs];
    //     this.sortDsc = false;
    // }

    // onNewBugAdded(newBug: Bug){
    //     this.bugs = [...this.bugs, newBug]
    // }

    


    
    
}