import { NgModule, Directive } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeOpsComponent } from './pipe-ops/pipe-ops.component';
import { DirectiveOpsComponent } from './directive-ops/directive-ops.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: "", redirectTo: "/signup", pathMatch: "full"},
  {path: "pipes", component:PipeOpsComponent},
  {path: "directives", component:DirectiveOpsComponent},
  {path: "signup", component:SignupComponent},
  {path: "login", component:LoginComponent},
  {path: "store", component:StoreComponent},
  {path: "cart", component:CartComponent},
  {path: "**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [PipeOpsComponent, DirectiveOpsComponent, SignupComponent, LoginComponent, StoreComponent, CartComponent, NotfoundComponent]
