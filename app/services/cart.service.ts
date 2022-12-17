import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public order = {
    items:[]
  };
  public cart  = {};
  public items = [];
  public total = 0 ;
  
  constructor(
    private menu : MenuService,
    private route : Router,
  ) { 
    // build raw cart with all product qty = 0
    Object.keys(this.menu.rawFoodList).forEach(k => {
      this.cart[ this.menu.rawFoodList[k].menu_id ] = menu.rawFoodList[k];
      this.cart[ this.menu.rawFoodList[k].menu_id ]['qty'] = 0;
    });
  }

  cart_add(id){
    if(this.cart[id]['qty']<25){
      this.cart[id]['qty'] += 1;
    };
  };

  cart_minus(id){
    if(this.cart[id]['qty']>=1){
      this.cart[id]['qty'] -= 1;
    };
  };

  out_cart(){

    this.total = 0;

    Object.keys(this.cart).forEach((k) => {
      let item = this.cart[k];

      if(item.qty == 0){
        delete this.cart[k];
        // delete 0 qty item from all prod list
      }else{
        // build to app required data & count total
        this.total += (item.price * item.qty);
        this.items.push({    
          i: item.menu_id,
          n: item.prod_name,
          p: item.price,
          q: item.qty,
          s: (item.price * item.qty).toFixed(2),
        });
      };

    });

    this.total = parseFloat(this.total.toFixed(2));
    this.order.items = this.items;
    this.route.navigateByUrl('tabs/tab2/order/checkout');
  }

}
