import { Injectable } from '@angular/core';
import { GlobalVariableService } from './global-variable.service';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public FoodCategory;
  public FoodList = {};
  public rawFoodList = {};

  constructor(
    private http: HttpClient,
    private alert: AlertService,
    private glob: GlobalVariableService
  ) { 
    this.http.get(this.glob.base_url+"api/read/menu").subscribe({
      next:(data)=>{
        let result=data['result'];
        this.rawFoodList = result;
        // console.log(result);

        result.forEach(x => {
          if(! this.FoodList[x.category]){
            this.FoodList[x.category]=[x];
          }else{
            this.FoodList[x.category].push(x);
          };
        });
        this.FoodCategory = Object.keys(this.FoodList);
        console.log(this.FoodList);
      },
      error:(data)=>{
        console.log(data);
      }
    });
  }

}
