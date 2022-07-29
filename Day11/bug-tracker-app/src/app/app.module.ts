import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugs/bugs.component';
import { BugsComponentsModule } from './bugs/modules/bugComponents.module';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    // BugTrackerComponent,
    // ClosedCountPipe,
  ],
  imports: [
    BrowserModule,
    // UtilsModule,
    BugsComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
