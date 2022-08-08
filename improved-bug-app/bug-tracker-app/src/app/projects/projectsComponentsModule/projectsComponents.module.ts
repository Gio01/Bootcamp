import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { ProjectsComponent } from "../projects.component";
import { ProjectOperationsService } from "../ProjectsApi/projectsOperation.service";
import { ProjectItemComponent } from "./projectItem/projectItem.component";
import { ProjectListComponent } from "./projectsList/projectsList.component";
import {MatCardModule} from '@angular/material/card';
import { UtilsModule } from "src/app/utils/utils.module";
import { ProjectBugsComponent } from "./projectBugs/projectbugs.component";
import { ProjectEditComponent } from "./ProjectEdit/projectEdit.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";


@NgModule({
    declarations: [
        ProjectsComponent, //parent component also needs to be placed here and in the exports
        ProjectItemComponent,
        ProjectListComponent,
        ProjectBugsComponent,
        ProjectEditComponent
       
        
    ],
    imports: [
        CommonModule,
        MatCardModule,
        UtilsModule,
        RouterModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports:[
        ProjectsComponent
    ]
})

export class ProjectComponentModule{

}