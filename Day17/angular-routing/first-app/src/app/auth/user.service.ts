import { Injectable } from "@angular/core";
import { UrlSegment } from "@angular/router";
import * as moment from 'moment';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private _isLoggedIn = false;
    public urlAttempted : UrlSegment[]= [];

    //private loginNav$: BehaviorSubject<Storage> = new BehaviorSubject({'UserSession': {loggedIn: true, created: new Date()}})
    private storage: Storage = window.localStorage;

    public Login(){
        //authentication! we are just changing the state here of the variable! 

        this._isLoggedIn = true;
        this.storage.setItem('UserSession', JSON.stringify({loggedIn: true, createdAt: new Date()}))


        let rawStr = this.storage.getItem('UserSession')
        if(rawStr !== null){
            let session = JSON.parse(rawStr)
            console.log('Session login from the Login()',session.loggedIn)
            console.log(session)
        }
        
    }

    get LoggedIn(): boolean{
        //this function is called by the userService which contains the canActivate()
        //constructor to allow a user access to a certain route so this is the first
        //check before letting any nav to appear! 
        //console.log(this._isLoggedIn)
        console.log('get LoggedIn was called')
        let key = this.storage.key(0)

        if (key?.startsWith('UserSession')){
            let rawStr = this.storage.getItem('UserSession')
            if(rawStr !== null){
            
                let session = JSON.parse(rawStr)
                console.log('session login from the get LoggedIn()',session.loggedIn)
                
                console.log('type of session created at: ', new Date(session.createdAt), 'from date strin: ', session.createdAt)

                let timeSince = new Date(session.createdAt)
                let currentTime = new Date();
                let diff =  currentTime.getTime() - timeSince.getTime()//diff in milliseconds
                let diffInMinutes = Math.floor(diff / 60000);

                // console.log('time since: ', timeSince)
                // console.log('currentTime', currentTime)
                // console.log('time diff', diffInMinutes)
                
                /**
                 * Now my only problem now is that I do not have a Subject Behavior to 
                 * be able to get the nav bar to populate automatically upon the user
                 * having clicked on the login button
                 */
                if(diffInMinutes > 5){
                    this.storage.setItem('UserSession', JSON.stringify({loggedIn: false, createdAt: new Date()}))
                    this._isLoggedIn = false;
                    console.log('Current time was more than 20')
                    //2022-08-03T22:20:52.953Z
                }
                else{
                    console.log(session.loggedIn)
                    this._isLoggedIn = session.loggedIn;
                }

                console.log('Is logged IN: ', this._isLoggedIn)
                //return session.loggedIn
            }
        }


        return this._isLoggedIn
        
    }


}