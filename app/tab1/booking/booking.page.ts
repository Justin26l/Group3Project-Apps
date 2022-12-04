import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { AlertController } from '@ionic/angular';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  submitdata:any;

  name = new FormControl('');
  bookingForm = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    people: new FormControl(''),
    booking_time: new FormControl(''),
    comment: new FormControl(''),
  });


  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private apiService: BookingService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitBooking(){

    this.submitdata=this.bookingForm.value;

    this.apiService.createBooking(this.submitdata).subscribe(
      (data:any)=>{

        console.log(data);
        if(data.status == "ok") {
          console.log('success',data);
          this.router.navigate(["/tabs/tab1/thanks"]);
        } else {
          console.log('error',data);
        }
      }
    );

    
    }

    async presentAlert(header:string, subHeader:string, message:string) {

      const alert = await this.alertController.create({
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['OK','Cancel']
      });
  
      await alert.present();
  
    }
  
    
    
  }

