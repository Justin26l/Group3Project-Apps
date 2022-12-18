import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BranchService } from '../services/branch.service';
import { GlobalVariableService } from '../services/global-variable.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	branchList: any = [];
	token: string = "";


	constructor(
		private glob:GlobalVariableService,
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
	}

}