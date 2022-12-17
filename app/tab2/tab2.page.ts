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

  }
}
