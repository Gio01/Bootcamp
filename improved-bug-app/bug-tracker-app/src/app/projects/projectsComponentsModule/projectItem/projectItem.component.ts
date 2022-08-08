import { Component, Input } from "@angular/core";
import { Projects } from "../../models/project-type-objects";
import { ProjectOperationsService } from "src/app/projects/ProjectsApi/projectsOperation.service";
import { CreatedAtPipe } from "src/app/utils/pipes/createdat.pipe";
import { Bug } from "src/app/bugs/models/bug-type-object";
import { BugOperationsService } from "src/app/bugs/services/bugOperation.service";
import { ProjectsApi } from "../../ProjectsApi/projectsApi.service";

@Component({
    selector: 'app-project-item',
    templateUrl: './projectItem.component.html',
    styleUrls: ['./projectItem.component.css']
})
export class ProjectItemComponent{

    @Input()
    project? : Projects;

    @Input() 
    bugs: Array<Bug> =  new Array()
    constructor(private projectOperations: ProjectOperationsService, public bugOperations: BugOperationsService){

    }

    

}