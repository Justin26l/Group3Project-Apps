import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'order-menu',
    loadChildren: () => import('./order-menu/order-menu.module').then( m => m.OrderMenuPageModule)
  },
  {
    path: 'order-menu-category',
    loadChildren: () => import('./order-menu-category/order-menu-category.module').then( m => m.OrderMenuCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
