import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugs/bugs.component';
import { BugsComponentsModule } from './bugs/modules/bugComponents.module';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';
import { SignUpComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
    // BugTrackerComponent,
    // ClosedCountPipe,
  ],
  imports: [
    BrowserModule,
    // UtilsModule,
    BugsComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
