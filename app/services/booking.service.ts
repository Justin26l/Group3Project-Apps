import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  createBooking(data:any){
    return this.http.post("http://localhost/Group3Project/api/create/booking/",data);
  }
}
