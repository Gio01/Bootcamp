import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrimTextPipe,
    CalculatorComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
