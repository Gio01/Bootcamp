import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugs/bugs.component';
import { BugsComponentsModule } from './bugs/modules/bugComponents.module';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';
import { SignUpComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponentModule } from './projects/projectsComponentsModule/projectsComponents.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectBugsComponent } from './projects/projectsComponentsModule/projectBugs/projectbugs.component';
import { combineLatest } from 'rxjs';
import { ProjectItemComponent } from './projects/projectsComponentsModule/projectItem/projectItem.component';
import { ProjectListComponent } from './projects/projectsComponentsModule/projectsList/projectsList.component';


let routes: Routes = [
  {
    path: 'bug-tracker',
    component: BugTrackerComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    // children: [
    //   {
    //     path: 'project',
    //     component: ProjectItemComponent,
    //     children: [
    //        {
    //         path: 'bug-details', 
    //         component: ProjectBugsDetailsComponent
    //       }
    //     ]
    //   } 
    // ]
  },
  {
    path: 'projects/project/:projectId',
    component: ProjectItemComponent,
    
  }
]

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
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ProjectComponentModule,
    RouterModule.forRoot(routes),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
