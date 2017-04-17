import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HeaderPreloginComponent} from '../shared/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LoginComponent, HeaderPreloginComponent],
    exports: [LoginComponent, HeaderPreloginComponent]
})

export class LoginModule { }
