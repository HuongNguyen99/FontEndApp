import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { HomeComponent } from './home/home.component';
import { PopularDestinationComponent } from './popular-destination/popular-destination.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'popular-destinations', component: PopularDestinationComponent },
  { path: 'best-sellers', component: BestSellerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
