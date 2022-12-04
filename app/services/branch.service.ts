import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(
    private http: HttpClient
  ) { }

  getBranchList(token:string){
    return this.http.get('http://localhost/Group3Project/api/read/branch/'+token);
  }
}
