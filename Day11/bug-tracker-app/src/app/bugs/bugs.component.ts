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
    
    
    constructor(private bugOperations: BugOperationsService){
       this.bugs = this.bugOperations.getAll()
       //component -> operations -> storage
       //in this manner we have the link and then we are saying that we want 
       //to get all the data from localstorage and we put it into this
       //bugs array above and then use that to make the different UI 
       //manipulations!
    }

    add(newBugName: string){
        const newBug = this.bugOperations.add(newBugName);
    
        //this.bugs.push(newBug);//here is just so that we also have it within
        //the browser at the moment before refresh! After the refresh we will
        //call the storage again and get all the data from there!
        this.bugs = [...this.bugs, newBug]//creates a new array with all of the 
        //previous elements in the this.bugs array! (the current instance on the browser
        //before any reload happens!)
    }

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

    onRemove(bugToRemove : Bug){
        //here we are removing on elememnt obj from the bug array
        //this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
        this.bugs = this.bugs.filter(bug => bug.bugId !== bugToRemove.bugId)
        this.bugOperations.remove(bugToRemove);
    }

    onToggle(bugToToggle : Bug){
        /**
         * Here we are simply changing the state of isClosed to true if we
         * click on the name of the bug to toggle the is done mark 
         */
        //this.bugs = [...this.bugs]//this will create a new array with the same
        // elements as this.bugs! The reason why we do this is so that the sort()
        //can be triggered by seeing that there is a change in the array!
        console.log(this.bugs)

        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.bugId === bugToToggle.bugId ? toggledBug: bug );
        
    }

    onRemoveClosed(){
        /**
         * Checks to see if the isClosed is true and if so then that means that
         * they are marked as closed and we want to delete them from the UI
         */
        for (let index = this.bugs.length-1 ; index >= 0; index--){
            if (this.bugs[index].isClosed){
                // console.log(JSON.stringify(this.bugs[index]))
                /**
                 * Here we are finding that bug that matches the string object!
                 * Since we gave the value to be the entire bug object we are trying
                 * to delete the item and we are able to use the removeItem with the 
                 * key of the object in localstorage! We made the index to be
                 * bug--{bugId} which is why we are using that to refer to the 
                 * same object and it works since we used the original bug's id to create
                 * the key for the localstorage so the id will match on both!
                 */
                // console.log(this.bugs[index].bugId)

                // localStorage.removeItem(`bug-${this.bugs[index].bugId}`)
                // this.bugs.splice(index, 1);

                this.onRemove(this.bugs[index])
                //here we can simply call onRemove() since that is the single 
                //removing of a bug so we can remove all by iterating and 
                //calling this method on that since indexed bug
                
            }
        }
        
        //1 is how many we want to delete from the start index we give!
        //here since we only want to remove that single index value we give 
        //the start as the index we want to remove and only remove that 1
        
    }


    
    
}