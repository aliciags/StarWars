import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './components/details/person-details/person-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'people', component: HomeComponent},
  { path: 'people/:id', component: PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
