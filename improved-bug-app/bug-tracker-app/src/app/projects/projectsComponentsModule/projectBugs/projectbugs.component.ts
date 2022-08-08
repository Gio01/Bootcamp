import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ConnectableObservable, Observable } from "rxjs";
import { Bug } from "src/app/bugs/models/bug-type-object";
import { BugApiService } from "src/app/bugs/services/bugApi.service";
import { BugOperationsService } from "src/app/bugs/services/bugOperation.service";
import { Projects } from "../../models/project-type-objects";
import { ProjectOperationsService } from "../../ProjectsApi/projectsOperation.service";

@Component({
    selector: 'app-project-bugs',
    templateUrl: './projectbugs.component.html',
    styleUrls: ['./projectbugs.component.css']
})
export class ProjectBugsComponent{

    projectBugs: Array<Bug> = new Array();
    bugsArray: Array<Bug>= new Array();
    projectId: string = '';
    bugDetails: Array<Bug> = new Array();
   

    @Input()
    bugs: Array<Bug> =  new Array()

    newProjectBugForm = new FormGroup({
        newProjectBugName: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),
    })

    constructor(private router: ActivatedRoute, public bugService: BugOperationsService, private projectService: ProjectOperationsService){
        this.router.params.subscribe(params => {
            this.projectId = params['projectId']
        })

        for(let i = 0; i < this.bugService.bugs.length; i++){
            if(this.bugService.bugs[i].projectId === parseInt(this.projectId)){
                this.bugsArray.push(this.bugService.bugs[i])
            }
        }

       console.log(this.bugsArray)
      
   
    }

    getBugs(){
        console.table(this.bugsArray)
        for(let i = 0; i < this.bugsArray.length; i++){
            this.bugDetails = this.bugsArray
        }
        
    }

    onAddNewProjectBug(){
        this.projectService.addNewBug(this.newProjectBugForm.value.newProjectBugName || '', this.projectId)
    }
}