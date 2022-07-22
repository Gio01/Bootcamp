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
    PipesComponent,
    SalaryCalculatorComponent
  
  ],
  imports: [
    /**
     * Dependency modules
     * You will import anything you need and then specify them here! 
     */
    BrowserModule
  ],
  /**
   * All the Non-UI entities will be registered here! This inclides 
   * things like services! 
   */
  providers: [],
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
