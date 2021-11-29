import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback,FeedbackResponse } from '../home/feedback.modal';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  url:string = "https://node-basic--app.herokuapp.com/addfeedback"
  signUpform!: FormGroup;
  isValid: Boolean;
  error = '';
  constructor(private http:HttpClient) {
    this.isValid = true
   }

  ngOnInit(): void {
    this.signUpform = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'suggestion': new FormControl(null,[Validators.required])
    }); 
  }
  onSubmit() {
    console.log(this.signUpform.get('username')?.value);
    if(!this.signUpform.get('username')?.valid) {
      this.isValid = false
      this.error = "Please enter valid username!!";
    } else if(!this.signUpform.get('email')?.valid){
      this.isValid = false
      this.error = "Please enter valid email!!";
    }else if(!this.signUpform.get('suggestion')?.valid){
      this.isValid = false
      this.error = "Please enter suggestion !!";
    } else {
      this.isValid = true
      this.error =''
      var username = this.signUpform.get('username')?.value
      var email = this.signUpform.get('email')?.value
      var suggestion = this.signUpform.get('suggestion')?.value
      this.hitApi( new FeedbackRequest(
        username,
        email,
        suggestion
      )).subscribe(data => {
        console.log(data)
        this.signUpform.reset()
      })
      
    }
  }
  hitApi(req: FeedbackRequest) {
    return this.http.post<FeedbackResponse>(this.url,req).pipe(
      map(data => {
        return data.data;
      })
    )
}
}

export class FeedbackRequest {
  constructor( 
    private username:string,
    private email:string,
    private suggestion:string
    ){}
}

