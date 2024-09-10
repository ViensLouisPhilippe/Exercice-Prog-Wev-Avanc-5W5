import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerreDEauComponent } from './verreDEau/verreDEau.component';
import { SelComponent } from './sel/sel.component';
import { CaramelAuSelComponent } from './caramelAuSel/caramelAuSel.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    VerreDEauComponent,
    SelComponent,
    CaramelAuSelComponent,
    ParentComponent
  ],
  imports: [
    FormsModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
