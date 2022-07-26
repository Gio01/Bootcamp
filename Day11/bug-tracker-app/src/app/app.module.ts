import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { CreatedAtPipe } from './bugs/pipes/createdat.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ClosedCountPipe,
    CreatedAtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
