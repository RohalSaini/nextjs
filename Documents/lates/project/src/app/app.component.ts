import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'project';
  isActive = true
  onClickCalled() {
    console.log("menu is clided");
  }
}
