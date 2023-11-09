import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterationModalComponent } from 'src/app/shared/registeration-modal/registeration-modal.component';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  value = 4
  courseId: any
  course: any
  modalRef?: BsModalRef;

  constructor(public activatedRoute: ActivatedRoute, private coursesService: CoursesService, private router: Router, private modalService: BsModalService) {
    this.courseId = this.activatedRoute.snapshot.params['id'];
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.courseId = this.activatedRoute.snapshot.params['id'];
        this.getCourseById()
      }
    })
  }

  ngOnInit(): void {
    this.getCourseById()
  }

  getCourseById() {
    this.coursesService.getCourseByID(this.courseId).subscribe((course: any) => {
      console.log(course);
      this.course = course.data
    })
  }

  register() {
    this.modalRef = this.modalService.show(RegisterationModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }
}
