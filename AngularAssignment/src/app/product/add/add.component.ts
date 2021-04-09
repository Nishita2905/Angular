import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import {DataTableConstants} from 'src/app/global';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  [x: string]: any;
  static productid:number=0;
  productform=this.fb.group({});
  constructor(private fb:FormBuilder,private productService:ProductService,private router:Router) { };
  ngOnInit() {
    
    if(localStorage.getItem("productlist")!=null)
    {
    this.productService.products=JSON.parse(localStorage.getItem("productlist"));
    AddComponent.productid=this.productService.products.length;
    console.log(AddComponent.productid);
    }
    else
    {
      AddComponent.productid=0;
    }
    this.productform.addControl('id',new FormControl(''));
    this.productform.addControl('name',new FormControl(''));
    this.productform.addControl('description',new FormControl(''));
    this.productform.addControl('price',new FormControl(''));
    this.productform.addControl('quantity',new FormControl(''));
    this.productform.addControl('imgurl',new FormControl(''));
  }

  save($event)
  {
  
      this.saveproduct();
      this.router.navigate(['/products']);
  }
  private saveproduct()
  {
    //localStorage.setItem("product_save",JSON.stringify(this.ProductService.products));
    var i=DataTableConstants.ItemPerPage;
    i=i+1;
    DataTableConstants.ItemPerPage=i;
    const product= new Product();
   
    //product.id=this.i;
    
    product.id=AddComponent.productid;
   // console.log(product.id);
    product.name=this.productform.get('name').value;
    product.description=this.productform.get('description').value;
    product.price=this.productform.get('price').value;
    product.quantity=this.productform.get('quantity').value;
    product.imgurl="assets/images/"+this.productform.get('imgurl').value.split('\\').pop();
     

    //localStorage.setItem("product_save",JSON.stringify(product));
  //  console.log(product.id);
  
  console.log(AddComponent.productid);
    this.productService.addnewProduct(product);
    AddComponent.productid++;
    // localStorage.setItem("first",);
   
  }

}
