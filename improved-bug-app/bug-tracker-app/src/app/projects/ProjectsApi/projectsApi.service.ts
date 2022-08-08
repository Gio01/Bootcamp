import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Projects } from "../../projects/models/project-type-objects";

@Injectable({
    providedIn: 'root'
})
export class ProjectsApi {

    constructor(private http:HttpClient){

    }

    getAllProjects(): Observable<Array<Projects>>{

        //this http.get will return an observable of the type of the array of projects
        return this.http.get<Array<Projects>>('http://localhost:3000/projects')
        
    }

    addNewProject(newProjectData: Projects):  Observable<Projects> {
        console.log(newProjectData)
        return this.http.post<Projects>('http://localhost:3000/projects', newProjectData)
    }


}