import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OnclickDirective } from './onclick.directive';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { GroceryComponent } from './grocery/grocery.component';
import { HistoryComponent } from './history/history.component'

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    OnclickDirective,
    ServicesComponent,
    HomeComponent,
    AboutComponent,
    GroceryComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
