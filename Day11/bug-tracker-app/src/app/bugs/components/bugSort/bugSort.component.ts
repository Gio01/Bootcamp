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


}