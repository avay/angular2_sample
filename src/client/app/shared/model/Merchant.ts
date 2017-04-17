export class Merchant {
	mid: string;
	legalName: string;
	dbaName: string;

	constructor(obj?: any) {
		this.mid = obj && obj.mid || null;
		this.dbaName = obj && obj.dbaName || null;
		this.legalName = obj && obj.dbaName || null;
	}

}
