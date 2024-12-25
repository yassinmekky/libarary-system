import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private api:ServicesService){}
  orders:any
  total=0
  selectedOrderItems: any[] = [];
  ngOnInit(): void {
    this.getOrders()
  }
getOrders(){
  this.api.getOrders().subscribe((res:any)=>{
    this.orders=res
    console.log(this.orders);
  })
}

getArrayName(order: any): string {
  return Object.keys(order).find(key => key !== 'id') || '';
}
getRandomDate(): string {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}
setSelectedOrder(order: any) {
  const arrayName = this.getArrayName(order);
  this.selectedOrderItems = order[arrayName] || [];
  console.log(this.selectedOrderItems);
}
calculateTotal(order: any): number {
  const arrayName = this.getArrayName(order);
  const items = order[arrayName] || [];
  return items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
}
deleteOrder(orderId: string): void {
  this.api.deleteOrder(orderId).subscribe(() => {
    this.orders = this.orders.filter((order:any) => order.id !== orderId);
    alert("Order Deleted")
  }, error => {
    console.error('Error deleting order:', error);
  });
}

acceptOrder(orderId: string): void {
  this.api.deleteOrder(orderId).subscribe(() => {
    this.orders = this.orders.filter((order:any) => order.id !== orderId);
    alert("Order Accepted")
  }, error => {
    console.error('Error deleting order:', error);
  });
}
}
