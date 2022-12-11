import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public about = {
    "status": "ok",
    "error": "",
    "result": [
      {
        "logo": "http://localhost/Group3Project/asset/img/logo.svg",
        "company_name": "McDonald",
        "description": "From the taste of our food and its halal ingredients,<br>right down to our restaurant cleanliness,<br>dedicated crew and grassroots community programmes,<br>we’re dedicated to bring you and your family an experience you can feel good about.",
        "customer_service_no": "012 3456 7890",
        "bussiness_name": "John Cena",
        "bussiness_no": "012 3456 7890"
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
