import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
  
const routes: Routes = [
  {path:"",component:WelcomeComponent },
  {path:"navbar",component:NavbarComponent},
  {path:"login",component:FormComponent },
  {path:"guidelines",component:GuidelinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
