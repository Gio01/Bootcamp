import { AbstractControl } from "@angular/forms";

export function passwordValidator(form: AbstractControl): { [key: string]: boolean } | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')

    if(password?.pristine || confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? {'mismatch': true} : null
    //if the passwords do not match then return mismatch: true, else return null!
    //that is why we say that in the return value we return either { [key: string]: boolean } or null
}