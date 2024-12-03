import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HederComponent } from './shared/heder/heder.component';
import { VistaComponent } from './home/vista/vista.component';
import { FooteComponent } from './home/foote/foote.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

  { path: 'home', component: VistaComponent},
  
  { path: 'componente de home', component: FooteComponent},

  { path: 'login', component: LoginComponent },

  {path: '', component: HederComponent},

  {path: '', component: FooterComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
