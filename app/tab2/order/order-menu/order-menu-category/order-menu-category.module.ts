import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMenuCategoryPageRoutingModule } from './order-menu-category-routing.module';

import { OrderMenuCategoryPage } from './order-menu-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderMenuCategoryPageRoutingModule
  ],
  declarations: [OrderMenuCategoryPage]
})
export class OrderMenuCategoryPageModule {}
