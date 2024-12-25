import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent   implements OnInit {
 constructor(private api:ServicesService){}
 books:any;
    ngOnInit(): void {
      this.getBook()
    }

    getBook(){
      this.api.getbooks().subscribe((res:any)=>{
        this.books=res
      })
    }
}


