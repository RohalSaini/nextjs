import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  buy:list[] = [];
  constructor() { 
    try {
      this.buy = JSON.parse(localStorage.getItem('buy') || '');
    } catch(error) {
      this.buy =[]
    }
    
  }

  ngOnInit(): void {
     console.log(this.buy);
  }
  onReset() {
    console.log("buy");
    localStorage.removeItem('buy');
    this.buy = [];
  }

}

class list {
  constructor(public quantity:number,public name: string) {}
}
