import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BooksComponent } from '../books/books.component';
import { OrdersComponent } from '../orders/orders.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
