import { MerchantSearchVo } from './MerchantSearchVo' ;
import { PageDetail } from './PageDetail';

export class MerchantSearchRes {
	merchants: MerchantSearchVo[];
	pageDetail: PageDetail;
	totalMerchantProfiles: number;
	totalActive: number;
	totalInProgress: number;
	totalCancelled: number;
	totalClosed: number;
}