import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVariableService } from '../../services/global-variable.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.page.html',
  styleUrls: ['./menu-category.page.scss'],
})
export class MenuCategoryPage implements OnInit {

  public category:string;
  public FoodCat=[];
  constructor(
    private route: ActivatedRoute,
    private menu:MenuService,
    private glob:GlobalVariableService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['cat']; 
    });
    
    this.FoodCat = this.menu.FoodList[this.category];
    console.log(this.FoodCat)
  }

}
