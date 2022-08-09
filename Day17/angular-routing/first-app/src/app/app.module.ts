import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { PipesComponent } from './pipes/pipes.component';
import { SalaryCalculatorComponent } from './salarycalculator/salarycalculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './notFount.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductComponent } from './products/product.component';
import { LoginComponent } from './auth/login.component';
import { LoggedInGuard } from './auth/loggedInGuard';

let routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'spinner',
    component: SpinnerComponent, 
    canActivate: [LoggedInGuard]
  }, //by having this guard the user can only access the spinner component if they are loggedin!
  {
    path: 'greeter', 
    component: GreeterComponent,
    canActivate: [LoggedInGuard]},
  { 
    path : 'products', 
    component : ProductsComponent,
    children : [

      {
        path : ':productName', 
        component : ProductComponent,
        children: [
          {path: 'details', component: ProductDetailsComponent}
        ]}
    ],
    canActivate: [LoggedInGuard]
  },
  
  {
    path: 'calculator', 
    component: CalculatorComponent,
    canActivate: [LoggedInGuard]
  },
  // {path : 'calculator-result', component : CalculatorResultComponent},
  {path : 'calculator-result/:operation', component : CalculatorResultComponent},
  {path: '', redirectTo: '/spinner', pathMatch: 'full'}, //full here means that it will match against
  //the entire URL link such as localhost:4200/spinner and not just /spinner
  {path: '**', component: NotFoundComponent}

] 

@NgModule({
  /**
   * Declares all of the UI entities that are a part of the module!
   * The UI entities are Components, Directives, and Pipes! 
   * Here is where we add all other components
   */
  declarations: [
    AppComponent,
    SpinnerComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    DirectivesComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    PipesComponent,
    SalaryCalculatorComponent,
    CalculatorAppComponent,
    CalculatorResultComponent,
    LoginComponent
  ],
  imports: [
    /**
     * Dependency modules
     * You will import anything you need and then specify them here! 
     */
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  /**
   * All the Non-UI entities will be registered here! This inclides 
   * things like services! 
   */
  providers: [
    // {provide: SalaryCalculatorModel, useClass: SalaryCalculatorModel},
    /**
     * Here when someone requests the SalaryCalculatorModel we can 
     * change the useClass to be any other class that we want! Meaning 
     * that in this manner we can change that useClass to be SalaryCalculatorModel2
     * 
     * The reason for doing this is so that we can have diff versions of the
     * class for cases such as you want to serve one class for one version
     * and then the altered one for another version!
     * 
     * Another use case would be where we need to rollback to a previos version,
     * in this manner we would have all of the versions without needeing 
     * to rewrite the original version as we might forget what we originally had!
     * 
     * It is also possible to simply give an object for what it is that we 
     * want to serve to someone when they call some service! Ex:
     * 
     * {provide: SalaryCalculatorModel, useValue: calculator}
     * where calculator would be an object with the value 500 or whatever
     */
    //  { provide : SalaryCalculatorModel, useFactory : calculatorModelFactory}
     /**
      * It is also possible to serve a function when someone is calling a service!
      * we can simply create the function and refer to it by its name using the 
      * useFactory option! 
      * 
      * In this manner we can also use an object change the states as well
      * as within the useValue case! So instead of creating an entire class
      * 
      * These are for diff use cases of course, so we shall do the class version
      * unless if we see that there is something simpler to do and that a model
      * class is simply overkill
      * 
      * It is also possible to simply use that @Injectable so that we can 
      * manually create the injection of the Model dependency within the 
      * class constructor!!
      */

  ],
  /**
   * An application is created through a composition of components! 
   * However there is a top most component/root! 
   * Within the bootstrap is where we declare the root component! That 
   * is the AppComponent and in the main.ts we are adding that in the 
   * code to bootstrap! bootstrapModule(AppModule)
   * 
   * You can add multiple top most components! you just need to add it
   * within the bootstrap!!
   */
  bootstrap: [AppComponent]
})
export class AppModule { }