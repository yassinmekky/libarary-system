import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get('http://localhost:3000/books')
  }
  addUser(data:any){
    return this.http.post('http://localhost:3000/users',data)
  }
  getUser(){
    return this.http.get('http://localhost:3000/users')
  }
  sendOrder(data:any){
    return this.http.post('http://localhost:3000/orders',data)
  }
}
