import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PenguinComponent } from './penguin/penguin.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'penguin-component', component: PenguinComponent },
  { path: 'signin-component', component: SigninComponent },
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
