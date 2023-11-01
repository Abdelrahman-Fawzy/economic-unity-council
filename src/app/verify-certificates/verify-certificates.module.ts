import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyCertificatesRoutingModule } from './verify-certificates-routing.module';
import { VerifyCertificatesComponent } from './verify-certificates.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VerifyCertificatesComponent
  ],
  imports: [
    CommonModule,
    VerifyCertificatesRoutingModule,
    SharedModule
  ]
})
export class VerifyCertificatesModule { }
