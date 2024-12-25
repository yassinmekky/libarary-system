import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userData } from './user_data';
import { ServicesService } from '../user/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formValue!:FormGroup
userDataObj : userData = new userData
users:any
constructor(private api:ServicesService , private formBuilder:FormBuilder , private router: Router){}
showPassword: boolean = false;
showAlert: boolean = false;

ngOnInit(): void {
  this.formValue = this.formBuilder.group({
    name: ['', 
      [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+-=]{3,}$/) 
      ]
    ],
    email: ['', 
      [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z]+[0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/) 
      ]
    ],
    password: ['', 
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/) 
      ]
    ]
  }),
  this.getUsers()
  localStorage.clear();

}
/* Register() {
  this.userDataObj.name = this.formValue.value.name;
  this.userDataObj.email = this.formValue.value.email;
  this.userDataObj.password = this.formValue.value.password;

  let userExists = false;

  for (let i = 0; i < this.users.length; i++) {
    if (this.userDataObj.email === this.users[i].email || this.userDataObj.name === this.users[i].name) {
      console.log("User Exists");
      userExists = true;
      break; 
    }
  }
  if (!userExists) {
    this.api.addUser(this.userDataObj).subscribe(
      (res: any) => {
        console.log("Registration successful");
        this.formValue.reset();
      },
      (error: any) => {
        console.error("Error during registration", error);
      }
    );
  }
} */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  Register() {
    // Check if the form is valid
    if (this.formValue.valid) {
      // Assign form values to userDataObj
      this.userDataObj.name = this.formValue.value.name;
      this.userDataObj.email = this.formValue.value.email;
      this.userDataObj.password = this.formValue.value.password;
  
      let userExists = false;
  
      // Check if user already exists
      for (let i = 0; i < this.users.length; i++) {
        if (this.userDataObj.email === this.users[i].email || this.userDataObj.name === this.users[i].name) {
          console.log("User Exists");
          userExists = true;
          break;
        }
      }
  
      // If user doesn't exist, proceed with API call
      if (!userExists) {
        this.api.addUser(this.userDataObj).subscribe(
          (res: any) => {
            console.log("Registration successful");
            this.formValue.reset(); // Reset the form after successful registration
            
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 3000);
          },
          (error: any) => {
            console.error("Error during registration", error);
          }
        );
      }
    } else {
      // If form is invalid, mark all controls as touched to trigger validation messages
      this.formValue.markAllAsTouched();
      console.log("Form is invalid. Please correct the errors before submitting.");
    }
  }
  

getUsers(){
    this.api.getUser().subscribe((res:any)=>{
    this.users=res
  })
}
login() {
  this.userDataObj.email = this.formValue.value.email;
  this.userDataObj.password = this.formValue.value.password;

  let userExists = false;
  for (let i = 0; i < this.users.length; i++) {
    if (this.userDataObj.email === this.users[i].email && this.userDataObj.password === this.users[i].password) {
      console.log("User Exists");
      localStorage.setItem('user',JSON.stringify([{name:this.users[i].name , email:this.users[i].email}]))
      userExists = true;
      if (this.users[i].type === "user") {
        this.router.navigate(['/user/']);
      } else if (this.users[i].type === "admin") {
        this.router.navigate(['/admin/']);
      }
      break; 
    }
  }

  if (!userExists) {
    console.log("User doesn't exist");
  }
}

}
