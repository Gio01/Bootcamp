import { Injectable } from "@angular/core";
import axios from 'axios';
import { Bug } from "../models/bug-type-object";
import { HttpClient }  from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class BugApiService{

    constructor(private http: HttpClient){

    }

    getAll(): Observable<Array<Bug>>{
        // return axios.get<Array<Bug>>('http://localhost:3000/bugs')
        //     .then(response => response.data)

        return this.http.get<Array<Bug>>('http://localhost:3000/bugs')
    }

    /**
     * What we are doing here is that here we are going return the entire
     * data object which will be the entire list of bugs!!
     * 
     * We want to do this because here we request the data but then we need to 
     * pass that into the bugoperations code so that we can pass that data into
     * the component instance of the bug arrays so that it can get displayed in 
     * the UI!! 
     * 
     * This provides seperation of code since bugsOperation will only handle 
     * the data but retrieving the data from the server is another job here!
     * We want this to be seperate and better organized in this fassion. 
     */

    saveBugData(newBugData: Bug): Observable<Bug>{
        console.log(newBugData)
        
        if(newBugData.id === 0){
            // return axios.post<Bug>('http://localhost:3000/bugs', newBugData)
            // .then(response => response.data)
            return this.http.post<Bug>('http://localhost:3000/bugs', newBugData)
        }
        else{
            //this is being used for the toggle as there are no new bugs being added
            //since the default value of the id would not be 0 anymore which tells
            //us that the bug exists! 
            
            // return axios.put(`http://localhost:3000/bugs/${newBugData.id}`, newBugData)
            //     .then(response => response.data)

            return this.http.put<Bug>(`http://localhost:3000/bugs/${newBugData.id}`, newBugData)
        }
        


    }

    // toToggle(bugToToggle: Bug){
    //     return axios.put(`http://localhost:3000/bugs/${bugToToggle.id}`, bugToToggle)
    //         .then(response => response.data)
    // }

    toRemove(bugToRemove: Bug): Observable<Bug>{
        // return axios.delete(`http://localhost:3000/bugs/${bugToRemove.id}`)
        //     .then(response => response.data)

        return this.http.delete<Bug>(`http://localhost:3000/bugs/${bugToRemove.id}`)
    }
}