import { Injectable } from "@angular/core";
import { Bug } from "src/app/bugs/models/bug-type-object";
import { BugApiService } from "src/app/bugs/services/bugApi.service";
import { BugOperationsService } from "src/app/bugs/services/bugOperation.service";
import { Projects } from "../../projects/models/project-type-objects"
import { ProjectsApi } from "./projectsApi.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectOperationsService {

    public projects: Array<Projects> = new Array();


    constructor(private projectApi: ProjectsApi ,private bugApi: BugApiService, private bugServices: BugOperationsService){

    }

    getAll(){
        //this will ask the Api to retrieve all of the projects to the user 
        //the bugApi get all projects returns an observable so we need to 
        //subscribe to it with a function of how to handle the data that is retrieved! 
        this.projectApi.getAllProjects()
            .subscribe(projects => {
                console.table(projects)
                this.projects = projects
            })
    }

    add(projectName: string){
       
        this.projectApi.addNewProject({id:0, name: projectName, desc:'', commenceDate: new Date})
            .subscribe(newProject => {
                console.table(newProject)
                this.projects = [...this.projects, newProject]
        })

    }

    addNewBug(bugName: string, projectId: string){
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date(),
            projectId: parseInt(projectId)
        }
        this.bugApi.saveBugData(newBug)
            .subscribe(newBug => {
                console.table(newBug)
                this.bugServices.bugs = [...this.bugServices.bugs, newBug]
            })
    }
}