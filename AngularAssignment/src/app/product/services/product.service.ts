import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Addtocart } from '../models/addtocart';
import { IProduct, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products:Array<Product>=[

  ];

  //private AddtocartProducts:Array<Addtocart>=[];
  constructor() {  }
    getAllProducts():Observable<IProduct[]>
    {
      return of(this.products);
    }
    getProductById(id:number):Observable<IProduct>
    {
      var product=this.products.find(item=>item.id==id)
      return of(product);
    }
    addnewProduct(product:IProduct):void
    {
    
        this.products.sort(item=>item.id)
        this.products.push(product)
        localStorage.setItem("productlist",JSON.stringify(this.products));
      
      
    }
    
}
