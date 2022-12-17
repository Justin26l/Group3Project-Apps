import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../../../services/global-variable.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-order-menu-category',
  templateUrl: './order-menu-category.page.html',
  styleUrls: ['./order-menu-category.page.scss'],
})
export class OrderMenuCategoryPage implements OnInit {

  constructor(
    private glob : GlobalVariableService,
    private cart : CartService,
  ) { }

  ngOnInit() {
  }

}
