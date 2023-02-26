import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'register', component:RegisterComponent},{path:'delete', component:DeleteComponent},{path:'**', component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
