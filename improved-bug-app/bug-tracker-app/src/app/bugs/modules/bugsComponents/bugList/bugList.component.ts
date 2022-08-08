import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BugTrackerComponent } from "../../../bugs.component";
import { Bug } from "../../../models/bug-type-object";
import { BugOperationsService } from "../../../services/bugOperation.service";

@Component({
    selector: 'app-bug-list',
    templateUrl: "./bugList.component.html",
    styleUrls: ['./bugList.component.css']
})
export class BugListComponent{
    
    @Input()
    bugs: Array<Bug> = new Array<Bug>();

    // @Output()
    // public onBugsChange: EventEmitter<Array<Bug>> = new EventEmitter<Array<Bug>>();
/**
 * 
 * The reason why we need this ouput on change emitter is that we are only currently making
 * changes on the local copy of the bugs array and hence when a change is happening we are only
 * altering the copy within this child component and hence we need to be able to add these changes
 * within the actual parent component's array! Hence we need to create an event emitter so that 
 * the changes can then be added into the parent components' array! 
 */

    // @Input()
    // sortAttrName: string = '';

    // @Input()
    // sortDesc: boolean = false;

    

    // @Output()
    // public callToggle: EventEmitter<Bug> = new EventEmitter<Bug>();

    // @Output()
    // public toRemove: EventEmitter<Bug> = new EventEmitter<Bug>();

    // @Output()
    // public toRemoveAll: EventEmitter<Bug> = new EventEmitter<Bug>();


    constructor(private bugOperations: BugOperationsService){

    }

    onRemoveClosed(){
        this.bugOperations.removeClosed();
    }

}