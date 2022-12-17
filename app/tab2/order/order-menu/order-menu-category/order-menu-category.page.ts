import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-order-menu-category',
  templateUrl: './order-menu-category.page.html',
  styleUrls: ['./order-menu-category.page.scss'],
})
export class OrderMenuCategoryPage implements OnInit {

  public category:string;
  public FoodCat=[];
  constructor(
    private route: ActivatedRoute,
    private menu : MenuService,
    private cart : CartService,
    private glob : GlobalVariableService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['cat']; 
    });
    
    this.FoodCat = this.menu.FoodList[this.category];
    console.log(this.FoodCat)
  }


}
