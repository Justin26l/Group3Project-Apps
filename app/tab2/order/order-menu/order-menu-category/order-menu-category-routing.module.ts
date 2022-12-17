import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMenuCategoryPage } from './order-menu-category.page';

const routes: Routes = [
  {
    path: '',
    component: OrderMenuCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderMenuCategoryPageRoutingModule {}
