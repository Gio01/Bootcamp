import { ArrayType } from "@angular/compiler";
import { Component, Input } from "@angular/core";
import { Bug } from "src/app/bugs/models/bug-type-object";
import { BugOperationsService } from "src/app/bugs/services/bugOperation.service";
import { Projects } from "../../models/project-type-objects";
import { ProjectOperationsService } from "../../ProjectsApi/projectsOperation.service";

@Component({
    selector: 'app-projects-list',
    templateUrl: './projectsList.component.html',
    styleUrls: ['./projectsList.component.css']
})
export class ProjectListComponent {


    @Input()
    projects: Array<Projects> = new Array();

    
    constructor(public projectsOperation: ProjectOperationsService, public bugOperations: BugOperationsService){
        
    }
}