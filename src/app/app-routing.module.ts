import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSignupComponent } from './event-signup/event-signup.component';

const routes: Routes = [
  { path: 'event', component: EventSignupComponent },
  { path: '', redirectTo: 'event', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
