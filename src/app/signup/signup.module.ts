import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import {SignUpService } from  './signup.service';
@NgModule({
  imports: [
    CommonModule,
      FormsModule,
    SignupRoutingModule
  ],
    providers: [
        SignUpService],
  declarations: [SignupComponent]
})
export class SignupModule { }
