import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './dashboard/results/results.component';
import { ResultsListComponent } from './dashboard/results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultsComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
