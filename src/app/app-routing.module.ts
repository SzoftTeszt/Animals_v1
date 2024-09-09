import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"animals", component:AnimalsComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:'/home', pathMatch:'full'},
  {path:"**", component:PageErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
