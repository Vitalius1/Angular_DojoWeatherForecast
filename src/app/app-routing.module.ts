import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/city/Seattle' },
  { path: 'city/:city', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
