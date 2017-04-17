import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MerchantOnboardingComponent, MerchantOnboardingSubNavComponent} from './merchant-onboarding.component';

@NgModule({
    imports: [RouterModule],
    declarations: [MerchantOnboardingComponent, MerchantOnboardingSubNavComponent],
    exports: [MerchantOnboardingComponent, MerchantOnboardingSubNavComponent]
})

export class MerchantOnboardingModule { }
