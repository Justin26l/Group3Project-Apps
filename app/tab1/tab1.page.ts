import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BranchService } from '../services/branch.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	branchList: any = [];
	token: string = "";


	constructor(
		private bh: BranchService,
		private auth: AuthService
	) {


		this.token = this.auth.getToken();

		this.bh.getBranchList(this.token).subscribe(
			(data: any) => {

				console.log('this is data',data);
				
				if (data.status == "OK" || data.status == "ok" ) {

					this.branchList = data.result;


				}
			}
		);

		//   this.branchList = [
		//     {"id":1, "name": "McDonald's Mount Austin", "description":"McDonalds", "image":"assets/McDonald's Mount Austin.jpg"},
		//     {"id":2, "name": "McDonald's Taman Daya", "description":"McDonalds", "image":"assets/McDonald's Taman Daya.jpg"},
		//     {"id":3, "name": "McDonald's Setia tropika", "description":"McDonalds", "image":"assets/McDonald's Setia tropika.jpg"}
		//   ];  

		// }


		// fetchData(){
		//   this.http.get('http://localhost/Group3Project/api/read/branch').subscribe(
		//     (data:any) => {
		//       this.branchList = data;
		//     }
		//   )
	}

}