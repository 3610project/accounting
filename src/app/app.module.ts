import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouterModule } from './router/router.module';
import { TransactionsService } from './view-all-transaction/transaction.service';
import { LoginComponent } from './login/login.component';
import { AddTransasctionComponent } from './add-transasction/add-transasction.component';
import { ViewAllTransactionComponent } from './view-all-transaction/view-all-transaction.component';


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
    ViewAllTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
