import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  myToken:string = "";

  constructor(
  
  ) { }

  setToken(token: string){
    this.myToken = token;
  }
  
  getToken(){
    return this.myToken;
  }
}
