import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalVariableService } from '../services/global-variable.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private http:HttpClient,
    private glob:GlobalVariableService,
    private menu:MenuService,
  ) {}

  ngOnInit(){
    this.http.get(this.glob.base_url+"api/read/menu").subscribe({
      next:(data)=>{
        let result=data['result'];
        // console.log(result);

        result.forEach(x => {
          if(! this.menu.FoodList[x.category]){
            this.menu.FoodList[x.category]=[x];
          }else{
            this.menu.FoodList[x.category].push(x);
          };
        });
        this.menu.FoodCategory = Object.keys(this.menu.FoodList);
        console.log(this.menu.FoodList);
      },
      error:(data)=>{
        console.log(data);
      }
    });
    
  }
}
