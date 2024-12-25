import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { NavuComponent } from './navu/navu.component';
import { DetailsComponent } from './details/details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { BooksComponent } from './books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    NavuComponent,
    DetailsComponent,
    FeatureComponent,
    BooksComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
