import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
   // this.ProductService.products=JSON.parse(localStorage.getItem("product"));
  }

}