import { getLocaleCurrencyCode, SlicePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Addtocart, IAddtocart } from '../models/addtocart';
import { IProduct, Product } from '../models/product';
import { AddtocartService } from '../services/addtocart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Observable<IProduct[]>=null;

  productsarr:any;
  atcproducts:Observable<IAddtocart[]>=null;
  public static total:number=0;
  public classReference = ListComponent;
  //natcproducts:Observable<IAddtocart[]>=null;
  //natcproducts:Observable<IAddtocart[]>=null;

  
 //PRODUCTID:Observable<IAddtocart[]>=null;
  constructor(
    private ProductService:ProductService,
    private addtocartService:AddtocartService
  ) { }

  ngOnInit(): void {
  
  this.ProductService.products=JSON.parse(localStorage.getItem("productlist"));

   if(localStorage.getItem("productcart")!=null)
    {
        console.log("entered");
        this.addtocartService.atcproducts=JSON.parse(localStorage.getItem("productcart"));
        
       ListComponent.total=parseInt(localStorage.getItem("Total"));
       // console.log(localStorage.getItem("Total"));
   }
    //this.addtocartService.atcproducts=JSON.parse(localStorage.getItem("product_add"));
  this.products=this.ProductService.getAllProducts();
 
    this.atcproducts=this.addtocartService.getAllProducts();
  }
  addtocart(p):void
   {
   
  var get = Number(prompt('Enter Quantity'));
  var a=this.ProductService.products;
  var aqua=a[p.id].quantity;
  if(get>aqua)
  {
    prompt("No quantity");
  }
  else
  {
    var q=aqua-get;
    console.log("Quantity Minus",q);
    var index=this.ProductService.products.indexOf(p.id);
    p.quantity=q;
    
    for(let obj of this.addtocartService.atcproducts)
    {
      if(p.id==obj.id)
      {
        console.log("found");
       obj.quantity+=get;
       obj.price=obj.quantity*p.price;
       var lval:number=parseInt(localStorage.getItem("Total"));
        lval=obj.price;
        localStorage.setItem("Total",lval.toString());
       ListComponent.total=parseInt(localStorage.getItem("Total"));
        //this.products.sort(item=>item.id)
       // this.products.push(obj)
       localStorage.setItem("productlist",JSON.stringify(this.ProductService.products));
       localStorage.setItem("productcart",JSON.stringify(this.addtocartService.atcproducts));
       return;
      }
     
    }
    this.addtocartService.addnewProduct(p,get,this.ProductService.products);
    
  }
    console.log(p.id);
   
   }
   delete(dp):void
   {
    // console.log(dp);
    var a=this.ProductService.products;
    console.log(a);
    var b=this.addtocartService.atcproducts;
    console.log(b);
    
    for(let i of a)
    {
      if(i.id==dp.id)
      {

        console.log(i);
        i.quantity+=dp.quantity;
        
      }
    }
    var v=parseInt(localStorage.getItem("Total"));
    v-=dp.price;
    localStorage.setItem("Total",v.toString());
    ListComponent.total= parseInt(localStorage.getItem("Total"));
    //for(let i of b)
   // {
       // ListComponent.total+=i.price;
   // }
    //row.quantity=row.quantity+qty1;
    //var id=row.id;
    //qty=qty+qty1;
    //row.quantity=qty;
    //a[id]=dp;
  //this.addtocartService.atcproducts.splice(this.addtocartService.atcproducts)
  //delete [this.addtocartService.atcproducts.indexOf(msg)];
  // dp.quantity=0;
  //const index:number=b.indexOf();
  //b.splice(index,1);
  this.addtocartService.atcproducts=this.addtocartService.atcproducts.filter(item=>item.id!==dp.id);
  this.atcproducts=this.addtocartService.getAllProducts();
  localStorage.setItem("productlist",JSON.stringify(this.ProductService.products));
  localStorage.setItem("productcart",JSON.stringify(this.addtocartService.atcproducts));
  }
  clear():void
  {
     //localStorage.removeItem("productlist");
    // localStorage.removeItem("productcart");
  }
}
