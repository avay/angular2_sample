export class MerchantSearchReq {
	mid: string;
	dbaName: string;
	legalName: string;
	
	constructor(obj?: any) {
		this.mid = obj && obj.mid || null;
		this.dbaName = obj && obj.dbaName || null;
		this.legalName = obj && obj.dbaName || null;
	}
}