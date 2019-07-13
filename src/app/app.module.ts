import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupOneComponent } from './signup-one/signup-one.component';
import { SignupTwoComponent } from './signup-two/signup-two.component';
import { Data } from './data';
import { InventoryCreationComponent } from './inventory-creation/inventory-creation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    SignupOneComponent,
    SignupTwoComponent,
    InventoryCreationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
