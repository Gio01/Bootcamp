import { Component } from "@angular/core";

@Component({
    selector: 'app-greeter',
    templateUrl: './greeter.component.html'
})
export class GreeterComponent {

    message = '';

    showMessage(userName: string){
        this.message = `Hello ${userName}, have a nice day!`;
    }

}