import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navu',
  templateUrl: './navu.component.html',
  styleUrls: ['./navu.component.css']
})
export class NavuComponent implements OnInit {
  cartCount: number = 0;
ngOnInit(): void {
const storedData = localStorage.getItem('user');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  const name = parsedData[0].name;
  console.log(name);
} else {
  console.error('No data found in localStorage for key "user".');
}
this.getCartCount();
}
logOut(){
  localStorage.clear();
}
getCartCount(): void {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  this.cartCount = cart.length;
}
}
