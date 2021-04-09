import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { Addtocart, IAddtocart } from '../models/addtocart';
import { IProduct, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  public atcproducts:Array<Addtocart>=[
    
      ];
 // addcartproducts:Observable<IProduct[]>=null;
 // products1:Observable<IAddtocart[]>=null;
 
  constructor() { }
  getAllProducts():Observable<IAddtocart[]>
    {
      return of(this.atcproducts);
    }
    getProductById(id:number):Observable<IAddtocart>
    {
      var product=this.atcproducts.find(item=>item.id==id)
      return of(product);
    }
    addnewProduct(product:IAddtocart,g:number,service):void
    {
       
      console.log(product);
      //this.addcartproducts["id"]=product.id;
      let newobj=new Product(product.name,product.description,product.price,g,product.imgurl);
      newobj.id=product.id;
      newobj.price=product.price*g;

      ListComponent.total+=newobj.price;
      localStorage.setItem("Total",ListComponent.total.toString());
      ListComponent.total=parseInt(localStorage.getItem("Total"));
      console.log(product);
      console.log(typeof(product));
      //var d=product.quantity;
      //["quantity"]=g;
      //console.log(g);
      //this.products1=product;
      //product.quantity=g;
      //console.log(product.quantity);
      //product=[{"id":product.id,}]
      
      this.atcproducts.push(newobj);
      this.atcproducts.sort(item=>item.id)
      
     localStorage.setItem("productlist",JSON.stringify(service));
      localStorage.setItem("productcart",JSON.stringify(this.atcproducts));
      //console.log(this.atcproducts);
      
    }
}
