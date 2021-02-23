import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { SelectStateService } from './states/states.service';
import { StateInterestingFactsComponent } from './state-interesting-facts/state-interesting-facts.component';
import { PlaceInfoComponent } from './place-info/place-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    StateInterestingFactsComponent,
    PlaceInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [SelectStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
