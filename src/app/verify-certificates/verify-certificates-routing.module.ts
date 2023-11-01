import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyCertificatesComponent } from './verify-certificates.component';

const routes: Routes = [
  { path: '', component: VerifyCertificatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyCertificatesRoutingModule { }
