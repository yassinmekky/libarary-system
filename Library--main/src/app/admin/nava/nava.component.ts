import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-nava',
  templateUrl: './nava.component.html',
  styleUrls: ['./nava.component.css']
})
export class NavaComponent implements OnInit {
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
  logOut(){
    localStorage.clear();
  }
}
