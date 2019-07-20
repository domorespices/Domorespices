import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupOneComponent } from './signup-one/signup-one.component';
import { SignupTwoComponent } from './signup-two/signup-two.component';
import { Data } from './data';
import { InventoryCreationComponent } from './inventory-creation/inventory-creation.component';
import { CreateUpdateInventoryComponent } from './create-update-inventory/create-update-inventory.component';
import { InventoryUpdateDialogBoxComponent } from './inventory-update-dialog-box/inventory-update-dialog-box.component';
import { MaterialModule } from './material.module';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    SignupOneComponent,
    SignupTwoComponent,
    InventoryCreationComponent,
    CreateUpdateInventoryComponent,
    InventoryUpdateDialogBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule
  ],
  entryComponents: [InventoryUpdateDialogBoxComponent],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
