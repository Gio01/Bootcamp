import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'app-bug-sort',
    templateUrl: './bugSort.component.html',
    styleUrls: ['./bugSort.component.css']
})
export class BugSortComponent {

    sortAttr: string = '';
    sortDsc:boolean = false;

    @Output()
    public toSortAttr: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public toSortDesc: EventEmitter<boolean> = new EventEmitter<boolean>();



    /**
     * Another manner in which we could have done it was to pass in the attrName from the
     * UI in thi sub component and then pass that as a template varible onto some methods 
     * we define here! 
     * 
     * Ex: select (change)="onSortOrder($any$(event).value)"
     * 
     * onSortAttrChange(sortAttr: string){
     *  
     * }
     */
}