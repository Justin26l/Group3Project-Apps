import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(
    private cart : CartService,
    private http : HttpClient,
    private glob : GlobalVariableService,
    private alert : AlertService,
  ) { }

  checkout(paymentMethod = "cash"){
    let timenow = Number((new Date().getTime()/1000).toFixed(0));
    let token = btoa('createOrder'+ (timenow/86400).toFixed(0));
    this.cart.order['paid'] = paymentMethod;
    console.log(this.cart.order);

    // Create Order
    this.http.post(
      this.glob.base_url + "api/create/order",
      {"create":this.cart.order,"token":token}
      ).subscribe({
      next: (data) => {
        if(data['status'] == 'ok'){
          this.alert.presentAlert("Order Created", "Please Have a minute to let our staff completed the order", "");
        }else{
          this.alert.presentAlert("ERROR !", "Error while creating order : ", data['result']);
        }
      },
      error: (data) => {
        // console.log(data);
        this.alert.presentAlert("ERROR !", data.name, data.message);
      }
    });
  }
  ngOnInit() {
  }

}
