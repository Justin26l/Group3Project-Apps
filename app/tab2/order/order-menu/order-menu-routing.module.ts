import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMenuPage } from './order-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OrderMenuPage
  },
  {
    path: 'order-menu-category/:cat',
    loadChildren: () => import('./order-menu-category/order-menu-category.module').then( m => m.OrderMenuCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderMenuPageRoutingModule {}
