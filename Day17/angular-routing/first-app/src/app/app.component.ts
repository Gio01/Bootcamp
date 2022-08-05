import { Component } from '@angular/core';
import { LoggedInGuard } from './auth/loggedInGuard';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //this is a state value! Any state that we want to appear in the UI needs to be 
  //passed to a component! 
  title = 'first-app';

  userChoice = '';

   loggedIn: boolean = false;

  
  // counter = 0;
  /**
   * If you think about it! Since a component is just a class with a decorator, 
   * you still have things such as constructors and class methods and everything
   * we did within a class!
   * we can access class atttibutes through the this.title!!! 
   */
  constructor(private userService: UserService){

    this.loggedIn = userService.LoggedIn;

    setTimeout(() => {
      this.title = 'My-App'
    }, 5000) //change the title in the UI after 5 seconds
  }

  onChangeClickTitle(){
    this.title = "Angular App"
  }

  // incrementSpinner(){
  //   this.counter++;
  // }

  // decrementSpinner(){
  //   this.counter--;
  // }

}

/**
 * So essentially what is happening now is that when we create another component
 * that decorator will have its own templateUrl: './app.component.html',
 * that it will point there and so the data within that component class will 
 * already point to that page and hence within that pointed page we do not need
 * to use this anymore in that context as well in the same manner that we saw
 * here! 
 *
 */