import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private api:ServicesService , private http:HttpClient ){}
  books:any
  addButton:boolean=false
  amount:number=0 
ngOnInit(): void {
  this.getAllBooks()
}
getAllBooks(){
  return this.api.getbooks().subscribe((res:any)=>{
    this.books=res
    console.log(this.books);
  })
}
addToCart(item: any) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItem = cart.find((cartItem: any) => cartItem.name === item.name);
  if (existingItem) {
    alert(`The book "${item.name}" is already in the cart!`);
    item.addButton = false; 
    this.amount=0
  } else {
    const cartItem = {
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: this.amount || 0,

    };
    if(cartItem.quantity>0){
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  item.addButton = false; 
    this.amount=0
}
}
}
