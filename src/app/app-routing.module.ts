import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupOneComponent } from './signup-one/signup-one.component';
import { SignupTwoComponent } from './signup-two/signup-two.component';
import { CreateInventryComponent } from './create-inventry/create-inventry.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
                        {path: 'signupFirst', component: SignupOneComponent},
                        {path: 'signupSecond', component: SignupTwoComponent},
                        {path: 'createInventry', component: CreateInventryComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, SignupOneComponent, SignupTwoComponent, CreateInventryComponent];
