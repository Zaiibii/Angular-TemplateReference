import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {

  btnof(data:any){
    alert('hello'+data.value);
  }
}
