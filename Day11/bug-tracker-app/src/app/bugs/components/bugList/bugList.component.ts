import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BugTrackerComponent } from "../../bugs.component";
import { Bug } from "../../models/bug-type-object";

@Component({
    selector: 'app-bug-list',
    templateUrl: "./bugList.component.html",
    styleUrls: ['./bugList.component.css']
})
export class BugListComponent{
    
    @Input()
    data: Array<Bug> = new Array<Bug>();

    @Input()
    sortAttrName: string = '';

    @Input()
    sortDesc: boolean = false;

    constructor(private parentComponent: BugTrackerComponent){

    }

    @Output()
    public callToggle: EventEmitter<Bug> = new EventEmitter<Bug>();

    @Output()
    public toRemove: EventEmitter<Bug> = new EventEmitter<Bug>();

    @Output()
    public toRemoveAll: EventEmitter<Bug> = new EventEmitter<Bug>();


}