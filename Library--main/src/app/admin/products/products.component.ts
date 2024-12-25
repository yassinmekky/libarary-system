import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { bookData } from '../add-book/book_data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
books:any;
formValue!:FormGroup
bookModelObj : bookData = new bookData
addBtn:Boolean=false;
editBtn:boolean=false;
constructor(private api:ServicesService , private formBuilder:FormBuilder){}

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
  return this.api.getProducts().subscribe((res:any)=>{
    this.books=res
  })
}
deleteBook(id: number): void {
    this.api.deleteBook(id).subscribe((res:any) => {
      console.log("deleted");
      this.getBooks()
    });
}
onAdd() {
  this.addBtn = true;   
  this.editBtn = false; 
  this.formValue.reset(); 
}

addBook() {
  this.addBtn = true;
  this.editBtn = false;

  const maxId = this.books.length ? Math.max(...this.books.map((book: any) => +book.id)) : 0;
  this.bookModelObj.id = maxId + 1;
  this.bookModelObj.name = this.formValue.value.name;
  this.bookModelObj.author = this.formValue.value.author;
  this.bookModelObj.description = this.formValue.value.description;
  this.bookModelObj.price = this.formValue.value.price;

  if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
          this.bookModelObj.image = reader.result as string; // Set the base64 string
          const bookDataToSend = { ...this.bookModelObj, id: this.bookModelObj.id.toString() };

          this.api.postBook(bookDataToSend).subscribe((res: any) => {
              alert("Success");
              this.formValue.reset();
              this.getBooks();
              this.selectedFile = null; 
          }, err => {
              alert("Error");
          });
      };
      reader.readAsDataURL(this.selectedFile); 
  }
}

/* addBook(){
  this.addBtn = true;
  this.editBtn = false;
  const maxId = this.books.length ? Math.max(...this.books.map((book:any) => +book.id)) : 0;
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

/*   selectedFile: File | null = null; 

  onFileSelected(event: Event): void {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
          this.selectedFile = target.files[0];
      }
  }
  onEdit(data:any){
  this.addBtn = false; 
  this.editBtn = true; 
  this.bookModelObj.id = data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['author'].setValue(data.author)
  this.formValue.controls['description'].setValue(data.description)
  this.formValue.controls['price'].setValue(data.price)
}
editBook(){
  this.bookModelObj.name=this.formValue.value.name;
  this.bookModelObj.author = this.formValue.value.author;
  this.bookModelObj.description= this.formValue.value.description;
  this.bookModelObj.price=this.formValue.value.price
  this.api.putBook(this.bookModelObj.id,this.bookModelObj).subscribe((res:any)=>{
    alert("Updated")
    this.getBooks()
  })
} */
  selectedFile: File | null = null;
  onEdit(data: any) {
    this.addBtn = false; 
    this.editBtn = true; 
    this.bookModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['author'].setValue(data.author);
    this.formValue.controls['description'].setValue(data.description);
    this.formValue.controls['price'].setValue(data.price);
    this.bookModelObj.image = data.image; // Store the current image
    this.selectedFile = null; // Reset the selected file
}

onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        this.selectedFile = file; // Store the selected file
    }
}

editBook() {
    this.bookModelObj.name = this.formValue.value.name;
    this.bookModelObj.author = this.formValue.value.author;
    this.bookModelObj.description = this.formValue.value.description;
    this.bookModelObj.price = this.formValue.value.price;

    if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
            this.bookModelObj.image = reader.result as string; // Set the new image base64
            this.updateBook(); // Call the method to update the book
        };
        reader.readAsDataURL(this.selectedFile); // Read the selected file as a data URL
    } else {
        // No new image selected, keep the existing one
        this.updateBook();
    }
}

updateBook() {
    this.api.putBook(this.bookModelObj.id, this.bookModelObj).subscribe((res: any) => {
        alert("Updated");
        this.getBooks();
        this.formValue.reset(); // Reset the form after updating
        this.selectedFile = null; // Reset the selected file
    }, err => {
        alert("Error updating book");
    });
}
}
