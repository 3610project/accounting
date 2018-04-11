import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTransasctionComponent } from './add-transasction/add-transasction.component';
import { ViewAllTransactionComponent } from './view-all-transaction/view-all-transaction.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: 'add', component: AddTransasctionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewAllTransactionComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'delete', component: DeleteComponent },
  { path: 'update', component: UpdateComponent},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }