import { Injectable } from "@angular/core";
import { Bug } from "../models/bug-type-object";
import { BugApiService } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
   
    public bugs: Array<Bug> = new Array();

    /**
     * 
     * Now here what we are wanting to do is that since services are singleton
     * meaning that they are not of multiple instances then that means that we 
     * can keep the bugs array here and then pass in all of the logic we need
     * here as this Array reference will be that of the parent component's array
     * and will not be a copy so we will have dirrect access to the array we 
     * need and do not need to worry about pasing back array from a child 
     * component to the parent in order for any changes in the child component
     * to be seen/reflect in the parent component's array! This can make a lot
     * of this extra things much cleaner as we do not need to always be passing 
     * data around from a child back up to the parent!
     */

    constructor(private bugStorage: BugStorageService, 
                private bugApi: BugApiService){
        //here we are now linking the BugStorage to the BugOperationService
    }

    getAll(){
        //this really is just so that we can then simply call getall()
        //from within the component to the bugOperatinoService and then 
        //the operation service will then call the getAll() from the
        //BugStorageService! The reason is that we decided that these three
        //would communicate in this manner component -> operation -> storage
        //however this is a decision that we can decide but this is a good 
        //solution here and this connection makes sense! 
        // return this.bugStorage.getAll()
        //this.bugs = this.bugStorage.getAll()
        
        this.bugApi.getAll()
            .subscribe(bugs => { 
                console.table(bugs)
                this.bugs = bugs});
            // console.log("get all was called")
        
        /**
         * Here we are reciving the bugs list from the axious .then promise!!
         * Meaning that here we can simply then access the individual 
         * bug objects from the returned list and use that to give to the 
         * component array! 
         */


    }

    add(newname : string) {
        const newBug : Bug = {
            id : 0,
            name : newname,
            isClosed : false,
            createdAt : new Date()
        }

        //this.bugStorage.save(newBug)
        // return newBug;
        //this.bugs = [...this.bugs, newBug]//need this so that the current
        //instance of the array is also recieving the data and hence can 
        //be displayed on the UI uppon a change! 
        //setItem(newname, __currentid)
        console.log("before await of the post!")
        
        this.bugApi.saveBugData(newBug)
            .subscribe(newBug => {
                console.table(newBug)
                this.bugs = [...this.bugs, newBug]
            })

            /**
             * When we run the subscribe() we are going to use the observable which 
             * is returned from the http request! 
             * 
             * bugApi.saveBugData -> http observerable of the result is returned
             * -> subscribe() -> we can run an operation on that observerable! -> add bug 
             */
         

    }
    
    
    toggle(bugToToggle : Bug){
        // bugToToggle.isClosed = !bugToToggle.isClosed;

        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        this.bugStorage.save(toggledBug);

        let addedBugToggle = this.bugApi.saveBugData(toggledBug)
        console.log(toggledBug)
        
        addedBugToggle.subscribe(() => 
            this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
            )

        // return toggledBug;
        //this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    remove(bugToRemove: Bug){
        this.bugStorage.remove(bugToRemove)

        this.bugApi.toRemove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
            })
        // this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }
   
}
/**
 * The reason that we have used an entire service file is that we were
 * trying to do non UI things such as some logic changing, which should 
 * be seperate from the component as within the component we should
 * only be having code that will alter things within the UI!!  
 * No other logic that will alter things that are not directly the UI.
 * 
 * Ex: here add does not change anythin on the UI! We are adding data into 
 * the array and that is it!
 * 
 * The toggle is also just changing the state of the obj! Not changing
 * anything in the UI!
 */