import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate{
    
    constructor(private userService: UserService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userService.LoggedIn){
            return true;
        }
        //url from where the snapshot was created
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
        return false
    }

    /**
     * RouterStateSnapshot will return the state of the router at a moment in time! 
     * 
     * canActivate is a built in function that we need to use in order to create the logic to say who it is that will be able 
     * to get access to a certain route/component! 
     * If the returned value is true then the user will get access to that rouite but if we return false then the navigation 
     * towards that route will be rejected! 
     * 
     * Here what we are doing within the state.url is that when a person tries to enter a page such as 
     * localhost:4200/products/Pen/details 
     * they will get this url stored in the RouterStateSnapshot and if the user is logged in then this route is activated and we
     * can simply use that to have a returnURL as to where when the user logs in they are then redirected back to that url link 
     * that they had requested initially! 
     */
}
