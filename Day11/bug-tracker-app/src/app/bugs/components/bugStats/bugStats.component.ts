import { Component, Input } from "@angular/core";
import { Bug } from "../../models/bug-type-object";

@Component({
    selector: 'app-bug-stats',
    templateUrl: './bugStats.component.html',
    styleUrls: ['./bugStats.component.css']
     /* 
        Here we need to bring in the styles that we want to be in this 
        component and not simply point the styleUrls to that of the 
        parent's component style! Treat each component as its own entity
    */
})
export class BugStatsComponent {
    @Input()
    data: Array<Bug> = new Array();

    /**
     * Now here we do not want to create a new array of bugs but rather we 
     * want to get the same bugs array from the bugs.component.ts file 
     * as an input into this file so that we are using the same instance
     * of the Array and can cordinate properly accross child components
     * from the Array in the parent component
     * 
     * To do this we need to use @Input and then in the parents' component
     * html file we need to pass in the data into that input! 
     * 
     * Ex: <app-bug-stats [data]='bugs'> </app-bug-stats>
     * 
     * Here data refers to the data in this child component and we are passing
     * the data array from the parent component where the array is called bugs
     * and then we equal/pass that data into this file's array called data!
     * 
     * Then in the child components template html file we will need to reference
     * to the data via the data and not bugs name for the array!!
     */
}