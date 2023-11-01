import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { RegisterationModalComponent } from './registeration-modal/registeration-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    RegisterationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GalleriaModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    RegisterationModalComponent,
    RouterModule,
    FormsModule,
    GalleriaModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
