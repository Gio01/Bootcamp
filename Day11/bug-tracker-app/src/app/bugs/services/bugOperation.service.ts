import { Injectable } from "@angular/core";
import { Bug } from "../models/bug-type-object";
import { BugStorageService } from "./bugStorage.service";


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
   
    constructor(private bugStorage: BugStorageService){
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
        return this.bugStorage.getAll()
    }

    add(newBugName : string) : Bug {
        const newBug : Bug = {
            bugId : 0,
            bugName : newBugName,
            isClosed : false,
            createdAt : new Date()
        }

        this.bugStorage.save(newBug)
        return newBug;
        //setItem(newBugName, __currentBugId)
    }
    
    
    toggle(bugToToggle : Bug): Bug{
        // bugToToggle.isClosed = !bugToToggle.isClosed;
        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        this.bugStorage.save(toggledBug);
        return toggledBug;
    }

    remove(bugToRemove: Bug){
        this.bugStorage.remove(bugToRemove)
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