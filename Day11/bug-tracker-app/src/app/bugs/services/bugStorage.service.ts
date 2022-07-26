import { Injectable } from "@angular/core";
import { Bug } from "../models/bug-type-object";

@Injectable({
    providedIn: 'root'
})
export class BugStorageService{
    private storage: Storage = window.localStorage;
    private _currentBugId : number = 0;

    getAll() : Array<Bug> {

        let bugs: Array<Bug> = new Array();

        for(let i = 0; i < this.storage.length; i++){
            let key = this.storage.key(i);
            if(key?.startsWith('bug-')) {
                //this means if key is not null then continue with the if
                let rawStr = this.storage.getItem(key);
                if (rawStr !== null){
                    let bug = JSON.parse(rawStr) 
                    this._currentBugId = this._currentBugId > bug.bugId ? this._currentBugId : bug.bugId;
                    bugs.push(bug)
                }
                //since JSON.parse(rawStr) gives us an error because it can be
                //null, we just need to check to see if it is and if not then continue
            }
        }

        return bugs;
    }

    remove(bug: Bug){
        this.storage.removeItem(`bug-${bug.bugId}`)
    }

    save(bug: Bug){
        if(bug.bugId === 0){
            //if it is 0 then it is a new bug as 0 is the default value we gave
            //to the Bug objects!
            bug.bugId = ++this._currentBugId; 
        }
        this.storage.setItem(`bug-${bug.bugId}`, JSON.stringify(bug))
    }
}