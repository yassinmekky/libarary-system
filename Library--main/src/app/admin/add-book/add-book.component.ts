import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { bookData } from './book_data';
import { ServicesService } from '../service/services.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  /* formValue!:FormGroup
  bookModelObj : bookData = new bookData
  books: any[] = [];

  constructor(private formBuilder:FormBuilder , private api:ServicesService){}
  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      name:[''],
      author:[''],
      description:[''],
      price:[''],
    })
    this.getBooks()
  }

  getBooks(){
    this.api.getProducts().subscribe((res:any)=>{
      this.books=res
    })
  }

  addBook(){
    const maxId = this.books.length ? Math.max(...this.books.map(book => +book.id)) : 0;
    this.bookModelObj.id = maxId + 1;
    this.bookModelObj.name=this.formValue.value.name;
    this.bookModelObj.author=this.formValue.value.author;
    this.bookModelObj.description=this.formValue.value.description;
    this.bookModelObj.price=this.formValue.value.price;
    const bookDataToSend = { ...this.bookModelObj, id: this.bookModelObj.id.toString()};

    this.api.postBook(bookDataToSend).subscribe((res:any)=>{
      alert("Success")
      this.formValue.reset()
      this.getBooks()
    },err=>{
      alert("error")
    })
  } */
}
