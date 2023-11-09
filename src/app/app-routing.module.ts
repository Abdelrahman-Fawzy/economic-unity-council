import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/home/home.module').then(x => x.HomeModule)},
  { path: 'courses', loadChildren: () => import('../app/courses/courses.module').then(x => x.CoursesModule)},
  { path: 'verify-certificate', loadChildren: () => import('../app/verify-certificates/verify-certificates.module').then(x => x.VerifyCertificatesModule)},
  { path: 'about-us', loadChildren: () => import('../app/about/about.module').then(x => x.AboutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
