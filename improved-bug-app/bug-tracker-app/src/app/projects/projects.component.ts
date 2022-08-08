import { Component } from "@angular/core";
import { Bug } from "../bugs/models/bug-type-object";
import { BugOperationsService } from "../bugs/services/bugOperation.service";
import { Projects } from "./models/project-type-objects";
import { ProjectOperationsService } from "./ProjectsApi/projectsOperation.service";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
    

    projects: Array<Projects> = new Array();

    bugs: Array<Bug> = new Array();
    constructor(public projectsOperation: ProjectOperationsService, public bugOperations: BugOperationsService){
        this.bugOperations.getAll()
        this.projectsOperation.getAll()
        //get all of the projects on the loading of the projects component! 
    }


}