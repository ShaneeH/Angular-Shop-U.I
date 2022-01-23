import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { PayComponent } from './pay/pay.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'pay', component: PayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
