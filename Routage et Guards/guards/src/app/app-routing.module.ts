import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaramelAuSelComponent } from './caramelAuSel/caramelAuSel.component';
import { SelComponent } from './sel/sel.component';
import { VerreDEauComponent } from './verreDEau/verreDEau.component';


const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'caramelAuSel', component: CaramelAuSelComponent },
  {
    path: '', component: AppComponent, children: [
      { path: 'sel', component: SelComponent },
      { path: 'verreDEau', component: VerreDEauComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
