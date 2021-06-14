import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  {path:'app-angular',component:ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ { provide: APP_BASE_HREF, useValue: "/" } ]
})
export class AppRoutingModule { }

