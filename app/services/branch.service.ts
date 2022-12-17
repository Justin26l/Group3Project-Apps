import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  public branchList = {};
  constructor(
    private http: HttpClient,
    private alert: AlertService
  ) { 
    this.http.get('http://localhost/Group3Project/api/read/branch/').subscribe({
      next : (data)=>{
        let result = data['result'];
        this.branchList=result;
      },
      error : (data)=>{
        console.log(data)
        this.alert.presentAlert("ERROR",data.name,data.message)
      }
    })
  }

  getBranchList(token:string){
    return this.http.get('http://localhost/Group3Project/api/read/branch/'+token);
  }
}
