import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../../services/global-variable.service';
import { CartService } from '../../../services/cart.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.page.html',
  styleUrls: ['./order-menu.page.scss'],
})
export class OrderMenuPage implements OnInit {

  constructor(
    private glob : GlobalVariableService,
    private cart : CartService,
    private menu : MenuService,
  ) { }

  ngOnInit() {
  }

}
