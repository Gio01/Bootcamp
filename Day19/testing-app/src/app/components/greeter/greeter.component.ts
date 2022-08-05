import { Component, OnInit } from "@angular/core";
import { GreeterService } from "src/app/services/greeter.service";

@Component({
    selector: 'app-greeter',
    templateUrl: './greeter.component.html',
    styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit{

    message: string = '';
    username: string = ''

    constructor(private greeter: GreeterService) {

    }

    ngOnInit(): void {
    }
  
    onClick(){

        this.message = this.greeter.greet(this.username);
    
    }
}