import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.less']
})
export class GroceryComponent implements OnInit {
signform!: FormGroup;
 lists: list[] = [];
 buy:list[] = [];
errorMessage:string = ''
valid: Boolean = true
ngOnInit(): void {
  this.signform = new FormGroup({
    'quantity': new FormControl(null),
    'name': new FormControl(null)
  });
  try {
    this.lists = JSON.parse(localStorage.getItem('items') || '');
  }catch(error) {
    this.lists =[];
  }
  try {
    this.buy = JSON.parse(localStorage.getItem('buy') || '');
  }catch(error) {
    this.buy =[]
  }
}
onSubmit() {
  let quantity:number = 0;
  let name:string=''
  quantity = this.signform.get('quantity')?.value
  name = this.signform.get('name')?.value
  if(quantity === null ) {
    this.valid = false
    this.errorMessage =" Please enter quantity";
  } else if(name === null || name.trim().length === 0) {
    this.valid = false
    this.errorMessage =" Please enter name of quantity";
  } else {
    console.log("ok !")
    this.valid = true
    this.errorMessage =""
    this.lists.push(
      new list(quantity,name)
    )
   console.log(this.lists)
   localStorage.setItem("items",JSON.stringify(this.lists)) 
   this.signform.reset();
  }
}
changed(evt:any) {
  console.log(evt.target.value);
  let idx = this.lists.findIndex(elem => elem.name === evt.target.value)
  let item = this.lists[idx]
  this.lists =  this.lists.filter(items => items.name !== evt.target.value)
  localStorage.removeItem('items');
  localStorage.setItem("items",JSON.stringify(this.lists)) 
  localStorage.removeItem('buy');
  this.buy.push(item);
  localStorage.setItem("buy",JSON.stringify(this.buy))
  //

}
}
class list {
constructor(public quantity:number,public name: string) {}
}