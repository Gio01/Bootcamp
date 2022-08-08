import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OutletContext } from "@angular/router";
import { Bug } from "../../../models/bug-type-object";
import { BugOperationsService } from "../../../services/bugOperation.service";

@Component({
    selector: 'app-bug-edit',
    templateUrl: './bugEdit.component.html',
    styleUrls: ['./bugEdit.component.css']
})
export class BugEditComponent {
    
    newBugForm = new FormGroup({
        newBugName: new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ]),
        newBugDesc: new FormControl('')
    })

    constructor(private bugOperations: BugOperationsService){

    }

    onAddNew(){
        // const newBug = this.bugOperations.add(this.newname)

        // this.bugAdded.emit(newBug)
        //this.bugOperations.add(this.newname);
        if (this.newBugForm.valid){
            this.bugOperations.add(this.newBugForm.value.newBugName || '');
        }
    }

}