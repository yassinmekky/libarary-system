import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private api:ServicesService){}
  orders:any;
  total:any
  cardProduct:any[]=[]
ngOnInit(): void {
  this.getCardProduct()
}
getCardProduct(){
  if("cart" in localStorage){
    this.cardProduct = JSON.parse(localStorage.getItem("cart")!)
    this.orders=this.cardProduct
}
this.getCartTotal()
}
getCartTotal(){
  this.total=0
  for(let i in this.cardProduct){
    this.total+=this.cardProduct[i].price * this.cardProduct[i].quantity
    localStorage.setItem("cart" , JSON.stringify(this.cardProduct))

}
}
/* getOrders(){
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  this.orders=cart
for(let i =0;i<cart.length;i++){
  let money= cart[i].quantity * cart[i].price
  this.total=money
  money=0
}
} */

orderNow() {
  const userInfo = JSON.parse(localStorage.getItem("user")!);
  const userName = userInfo[0].name;
  const cart = JSON.parse(localStorage.getItem('cart')!);
  
  if (userName && cart) {
    const orderData = {
      [userName]: cart.map((item: any) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image, // Include the image in the order data
      })),
    };
    
    console.log(orderData);
    
    this.api.sendOrder(orderData).subscribe((res: any) => {
      console.log(res);
      console.log("Order Sent successfully");
      localStorage.removeItem('cart');
      window.location.reload();  
    }, error => {
      console.error('Error sending order:', error);
    });
  }
}

addAmount(index:number){
this.cardProduct[index].quantity++
this.getCartTotal()
localStorage.setItem('cart',JSON.stringify(this.cardProduct))
}
minusAmount(index:number){
  this.cardProduct[index].quantity--
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cardProduct))
  }
  detectChange(){
    localStorage.setItem('cart',JSON.stringify(this.cardProduct))
    this.getCartTotal()
  }
clearCart(){
  localStorage.removeItem('cart')
  window.location.reload();
}
  deleteProduct(index:number){
    this.cardProduct.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.cardProduct))
    this.getCartTotal()
  }
}
