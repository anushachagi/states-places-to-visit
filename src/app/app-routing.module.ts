import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateInterestingFactsComponent } from './state-interesting-facts/state-interesting-facts.component';
import { StatesComponent } from './states/states.component';

const routes: Routes = [
  {path: '', component: StatesComponent},
  {path: 'interesting-facts', component: StateInterestingFactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
