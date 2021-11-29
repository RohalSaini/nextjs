import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path:'' ,component : GroceryComponent },
  { path:'history' ,component : HistoryComponent },
  { path:'services' ,component : ServicesComponent},
  { path:'feedback' ,component : FeedbackComponent},
  { path:'user' ,component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
