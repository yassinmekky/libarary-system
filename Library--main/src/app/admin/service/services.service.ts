import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/books')
  }
  postBook(data:any){
    return this.http.post('http://localhost:3000/books',data).pipe(map((res:any)=>{
    }))
  }
  deleteBook(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:3000/books/'+id).pipe(map((res:any)=>{
      return res 
    }))
  }
  putBook(id:number,data:any){
    return this.http.put('http://localhost:3000/books/'+id,data).pipe(map((res:any)=>{
      return res
    }))
  }
  getOrders(){
    return this.http.get('http://localhost:3000/orders')
  }
  deleteOrder(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/orders/'+id); // Adjust this URL according to your backend API.
  }
}
