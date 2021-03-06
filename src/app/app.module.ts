import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouterModule } from './/router.module';
import { TransactionsService } from './view-all-transaction/transaction.service';
import { LoginComponent } from './login/login.component';
import { AddTransasctionComponent } from './add-transasction/add-transasction.component';
import { ViewAllTransactionComponent } from './view-all-transaction/view-all-transaction.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    AddTransasctionComponent,
    ViewAllTransactionComponent,
    DeleteComponent,
    UpdateComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
