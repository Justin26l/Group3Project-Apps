import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariableService } from './global-variable.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient,
    private glob:GlobalVariableService,
  ) { }

  createBooking(data:any){
    return this.http.post(this.glob.base_url+"api/create/booking/",data);
  }
}
