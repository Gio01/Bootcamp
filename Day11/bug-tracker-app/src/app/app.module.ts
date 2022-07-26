import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugs/bugs.component';
import { BugEditComponent } from './bugs/components/bugEdit/bugEdit.component';
import { BugListComponent } from './bugs/components/bugList/bugList.component';
import { BugSortComponent } from './bugs/components/bugSort/bugSort.component';
import { BugStatsComponent } from './bugs/components/bugStats/bugStats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugSortComponent,
    BugEditComponent,
    BugListComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
