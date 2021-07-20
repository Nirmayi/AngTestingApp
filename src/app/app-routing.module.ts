import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'restaurents',component:RestaurentsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
