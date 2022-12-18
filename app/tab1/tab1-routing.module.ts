import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'booking/:id',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./thanks/thanks.module').then( m => m.ThanksPageModule)
  },
  {
    path: 'branch-detail',
    loadChildren: () => import('./branch-detail/branch-detail.module').then( m => m.BranchDetailPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
