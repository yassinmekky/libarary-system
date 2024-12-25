import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private toastr: ToastrService) {}  
  defaultview=""
setview(view:any){
  this.defaultview=view
}

isRed = false;
  change() {
    this.isRed = !this.isRed;
  }

  liked=true
  toggle(){
    this.liked=!this.liked
  }
  like = true
 

  showSuccess() {
    this.toastr.success('Message', 'Title', {
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    });
    
  }
}
