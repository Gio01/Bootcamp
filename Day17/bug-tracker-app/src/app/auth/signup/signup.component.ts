import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { passwordValidator } from "./password.validator";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    signupForm = new FormGroup({
        username: new FormControl('', [
            Validators.required
        ]),
        password: new FormControl('', [
            Validators.required
        ]),
        confirmPassword: new FormControl('', [
            Validators.required
        ])
    }, passwordValidator)
    //or [passwordValidator, otherfn, ...] where we can have an array of validator functions
}