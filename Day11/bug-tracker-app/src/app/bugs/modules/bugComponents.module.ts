import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { UtilsModule } from "src/app/utils/utils.module";
import { BugTrackerComponent } from "../bugs.component";
import { ClosedCountPipe } from "../pipes/closedCount.pipe";
import { BugEditComponent } from "./bugsComponents/bugEdit/bugEdit.component";
import { BugItemComponent } from "./bugsComponents/bugItem/bugItem.component";
import { BugListComponent } from "./bugsComponents/bugList/bugList.component";
import { BugSortComponent } from "./bugsComponents/bugSort/bugSort.component";
import { BugStatsComponent } from "./bugsComponents/bugStats/bugStats.component";

@NgModule({
    declarations: [
        BugTrackerComponent,//we also need to have here the parent component!
        BugEditComponent,
        BugItemComponent,
        BugListComponent,
        BugSortComponent,
        BugStatsComponent,
        ClosedCountPipe
        //here are all of the components that we need in order to 
        //work with these components! 
        //Basically think: What are all the bug components and then we include
        //them here!
        //After that think about what other components/pipes
        //is needed within this module!! 
    ],
    imports: [
        UtilsModule,
        CommonModule//this is needed in order to do things like ngFor within 
        //the entire module! Otherwise we will get an error that the common module
        //stuff is not found such as the date pipe of the ngFor! 
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        BugTrackerComponent,//here we just need to export the bugTracker parent
        //component! 
    ]
})
export class BugsComponentsModule {

}