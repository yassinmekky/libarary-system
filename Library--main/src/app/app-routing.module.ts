import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './user/books/books.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AuthGuard } from './share/auth.guard';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  
 {
  path:"user",
  component:UserComponent,children:[
    {
      path:"",
      component:HomeComponent , canActivate:[AuthGuard]
    },
    {
      path:"about",
      component:AboutComponent , canActivate:[AuthGuard]
    },
    {
      path:"books",
      component:BooksComponent , canActivate:[AuthGuard]
    },
    {
      path:"cart",
      component:CartComponent , canActivate:[AuthGuard]
    }
  ]
 },
 {
  path:"about",
  component:AboutComponent , 
},
 {
  path:"admin",
  component:AdminComponent,children:[
    {
      path:"",
      component:ProductsComponent , canActivate:[AuthGuard]
    },
    {
      path:"orders",
      component:OrdersComponent , canActivate:[AuthGuard]
    }
  ]
 }
  
  

 /*  {
    path:"",
    component:AllProductsComponent
  },
  {
    path:"card",
    component:CardComponent
  },
  {
    path:"product",
    component:AllProductsComponent
  },
  {
    path:"details/:id",
    component:ProductsDetailsComponent
  }, */
  /* {
    path:"user", 
    component:UserComponent,children:[
      {
        path:"card",
        component:CardComponent
      },
    ]
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
