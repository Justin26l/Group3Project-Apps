import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../services/global-variable.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public about ;

  constructor(
    private http:HttpClient,
    private glob:GlobalVariableService,
  ) { }

  ngOnInit() {
    this.http.get(this.glob.base_url+"api/read/about").subscribe({
      next:(data)=>{
        console.log(data['result'][0]);
        this.about = data['result'][0];
      },
      error:(data)=>{
        console.log(data);
      }
    });
  }

}
