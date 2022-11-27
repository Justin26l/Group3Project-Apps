import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public FoodCategory;
  public FoodList = {};
  constructor() { }
}
