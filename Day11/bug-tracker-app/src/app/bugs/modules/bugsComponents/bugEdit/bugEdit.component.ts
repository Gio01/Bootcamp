import { Component, EventEmitter, Output } from "@angular/core";
import { OutletContext } from "@angular/router";
import { Bug } from "../../../models/bug-type-object";
import { BugOperationsService } from "../../../services/bugOperation.service";

@Component({
    selector: 'app-bug-edit',
    templateUrl: './bugEdit.component.html',
    styleUrls: ['./bugEdit.component.css']
})
export class BugEditComponent {
    newname: string = '';

   
    /**
     * this will act as all of the event class that we want to mimic for 
     * when a user clicks a button! We need to do this so that when the
     * user clicks an event within the child component that will cause for
     * the parent component to react and run the necessary function calls
     * needed to then give the user what they have requested 
     * 
     *
     * Here we use the @Output to be able to send data from this file to 
     * other location whicj will be that of the parent component!
     * 
     * So basically EventEmitter is a callback function that will be called
     * when an event happens and we will then route the action that needs
     * to be taken to that of the parent component! 
     */
    // @Output()
    // public bugAdded: EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations: BugOperationsService){

    }

    onAddNew(){
        // const newBug = this.bugOperations.add(this.newname)

        // this.bugAdded.emit(newBug)
        this.bugOperations.add(this.newname);

    }

}