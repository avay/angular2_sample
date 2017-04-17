import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { MerchantService } from '../shared/merchant-service/merchant-service.service';
import { MerchantSearchRes } from  '../shared/model/MerchantSearchRes';
import { MerchantSearchReq } from '../shared/model/MerchantSearchReq';

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
   public merchantSearchRes: MerchantSearchRes;
   public merchantSearchReq: MerchantSearchReq;
   errorMessage: string;
   constructor(private merchantService: MerchantService) {}
   getMerchants() {
		this.merchantService.getMerchants().subscribe(
				merchantSearchRes => this.merchantSearchRes = merchantSearchRes,
				err =>  this.logError(err)
			);
   }
   SearchMerchants(){
	   console.log('Stringify : ' + this.merchantSearchReq);
   }
   newMerchantSearchReq(){
	   this.merchantSearchReq = new MerchantSearchReq();
   }
   logError(err: any) {
	   console.error('There was an error: ' + err);
	 }
   ngOnInit():any {
	   	this.getMerchants();
		this.newMerchantSearchReq();
	}
}
