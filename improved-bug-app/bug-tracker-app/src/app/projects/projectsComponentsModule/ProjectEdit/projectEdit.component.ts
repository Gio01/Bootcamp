import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { ProjectOperationsService } from "../../ProjectsApi/projectsOperation.service";


@Component({
    selector: 'app-project-edit',
    templateUrl: './projectEdit.component.html',
    styleUrls: ['./projectEdit.component.css']
})
export class ProjectEditComponent{

    newProjectForm = new FormGroup({
        newProjectName: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),

        

    })


    constructor(private projectOperations: ProjectOperationsService){

    }

    onAddNewProject(){
        console.log(this.newProjectForm.value.newProjectName)
        this.projectOperations.add(this.newProjectForm.value.newProjectName || '')
    }
}