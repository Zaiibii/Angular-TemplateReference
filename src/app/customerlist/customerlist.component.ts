import { Component } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

 

  selectedCustomer:any;

  customers=[
    {customerNo:1, name:'Ali',  address:'', city:'London', country:'UK'},
    {customerNo:2, name:'Ahmad',  address:'', city:'New York', country:'USA'},
    {customerNo:3, name:'Umer',  address:'', city:'Islamabad', country:'Pakistan'},
    {customerNo:4, name:'Jamal',  address:'', city:'New Delhi', country:'India'},
  ]
}
