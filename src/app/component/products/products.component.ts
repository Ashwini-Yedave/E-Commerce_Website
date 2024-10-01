import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// https://fakestoreapi.com/products
  public productList:any;
 public searchTerm :string = '';
 public searchkey:string ='';
 public  filterCategory:any;

  constructor(private apiservice :ApiService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
   this.apiservice.getProducts().subscribe(res =>{
  this.productList=res;
  this.filterCategory =res;

  this.productList.forEach((a:any) => {
    if(a.category === "men's clothing" || a.category === "men's clothing"){
      a.category = "fashion";
      
    }
    Object.assign(a,{quantity:1,total:a.price})
  });
  console.log(this.productList);
}); 
this.cartService.search.subscribe(val=>{
  this.searchkey=val;
})
  }

  addToCart(item: any){
     this.cartService.addToCart(item);
  }

  filter(category:string){
    this.filterCategory =this.productList
    .filter((a:any)=>{
      if(a.category == category || category== ''){
        return a;
      }
    });

  }
 

}
