import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    RatingModule
  ]
})
export class CoursesModule { }
