import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { BranchService } from 'src/app/services/branch.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  private ISO_date_now = (new Date (new Date().getTime() - new Date().getTimezoneOffset()*60000) ).toISOString().slice(0,19);
  private time_preprocess = this.ISO_date_now;

  private orderForm = {
    order_branch : "",
    is_dine      : true,
    table        : "",
    pickup_time  : "",
    order_by     : "",
    items        : [],
  };
  // orderForm.items = [
  //   {
  //      'i':'prod_id',
  //      'n':'name',
  //      'p':'price',
  //      'q':'QTY',
  //      's':'SUM'
  //    },
  // ];

  constructor(
    private alert:AlertService,
    private BS:BranchService,
    private route: Router,
    private cart: CartService,
  ) { }

  isDine(isDine:boolean){
    this.orderForm.is_dine = isDine;
  };

  toMenu(){
    
    // format date time
    if(!this.orderForm.is_dine){
      this.orderForm.pickup_time = this.time_preprocess.slice(0,19).replace("T"," ");
      this.orderForm.table = "";
    }else{
      this.orderForm.pickup_time = "";
    };

    // form validation
    if( 
      (this.orderForm.order_branch.length < 1) ||
      (this.orderForm.order_by.length < 1) ||
      (this.orderForm.is_dine && this.orderForm.table=="") || 
      (!this.orderForm.is_dine && this.orderForm.pickup_time=="")
    ){
      this.alert.presentAlert("Warning","Please fill all of the form.");
      return;
    };

    // to next step
    this.cart.order = this.orderForm;
    // console.log(this.cart.order);
    this.route.navigateByUrl('/tabs/tab2/order/order-menu');
  }

  ngOnInit() {};

}
