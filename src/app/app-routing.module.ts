import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/home/home.module').then(x => x.HomeModule)},
  { path: 'verify-certificate', loadChildren: () => import('../app/verify-certificates/verify-certificates.module').then(x => x.VerifyCertificatesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
