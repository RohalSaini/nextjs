import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Feedback} from './feedback.modal'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor( private http:HttpClient) { }
  url:string = "https://node-basic--app.herokuapp.com/allfeedback"
  feedbacks: Feedback[] = [];
  ngOnInit(): void {
   this.hitApi().subscribe((feedback:Feedback[]) => {
     console.log(feedback);
     this.feedbacks = feedback
   })
  }
  hitApi() {
    return this.http.get<FeedbackResponse>(this.url).pipe(
        map( (responseData:FeedbackResponse) => {
            return responseData.data
        })
    )
}
}
export interface FeedbackResponse {
  statusCode: number,
  success: boolean,
  data: Feedback[]
}
