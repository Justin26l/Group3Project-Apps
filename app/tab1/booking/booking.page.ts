import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  private submitdata:any;
  private branch_id:string = "";
  private ISO_date_now = (new Date (new Date().getTime() - new Date().getTimezoneOffset()*60000) ).toISOString().slice(0,19);

  name = new FormControl('');
  bookingForm = new FormGroup({
    name: new FormControl(''),
    person: new FormControl(''),
    book_time: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private glob: GlobalVariableService,
    private alert: AlertService,
    ) { }

  ngOnInit() {
    this.branch_id = this.route.snapshot.params['id'];
  }

  submitBooking(){

    this.submitdata=this.bookingForm.value;
    this.submitdata['book_branch'] = this.branch_id;
    this.submitdata.book_time = new Date(this.submitdata.book_time).toISOString().slice(0,19).replace("T"," ");

    this.http.post(
      this.glob.base_url+"api/create/booking",
      {
        "create":this.submitdata
      }
    ).subscribe(
      (data:any)=>{

        if(data.status == "ok" && data.result ) {
          this.router.navigate(["/tabs/tab1/thanks"]);
        } else {
          // console.log('error',data);
          this.alert.presentAlert("ERROR !",data.error,data.message);
        }
      }
    );
    
    }
    
  }

