import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedService } from '../services/shared.service';
import { Branches, Countries, Governorates, GraduationYears, Qualifications } from '../models/shared';
import { CategoriesService } from '../services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterationService } from '../services/registeration.service';

@Component({
  selector: 'app-registeration-modal',
  templateUrl: './registeration-modal.component.html',
  styleUrls: ['./registeration-modal.component.scss']
})
export class RegisterationModalComponent implements OnInit {

  modalRef?: BsModalRef;
  qualifications!: Qualifications
  countries!: Countries
  graduationYears!: GraduationYears
  governorates!: Governorates
  branches!: Branches
  categories: any
  courses: any
  registerationForm!: FormGroup
  formValues!: any
  formValid: boolean = false
  formSubmitted: boolean = false

  constructor(
    private modalService: BsModalService, 
    private sharedService: SharedService, 
    private categoriesService: CategoriesService,
    private coursesService: CoursesService,
    private registerService: RegisterationService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm()
    this.getQualifications()
    this.getCountries()
    this.getGraduationYears()
    this.getGovernorates()
    this.getBranches()
    this.getCategories()
  }

  createForm() {
    this.registerationForm = this.fb.group({
      enquiry_name: ['', Validators.required],
      enquiry_national_id: ['', [Validators.required, Validators.minLength(14)]],
      enquiry_email: ['', [Validators.required, Validators.email]],
      enquiry_qualification_id: [''],
      enquiry_graduate_year: [''],
      enquiry_country_id: [''],
      enquiry_gov_id: [''],
      enquiry_category_id: [''],
      enquiry_course_id: [''],
      genquiry_branch_id: [''],
      genquiry_telephone: ['', [Validators.required]],
      genquiry_type_id: [1]
    })
  }

  get f() {
    return this.registerationForm.controls
  }

  getQualifications() {
    this.sharedService.getQualifications().subscribe((qualifications: any) => {
      this.qualifications = qualifications
    })
  }
  getCountries() {
    this.sharedService.getCountries().subscribe((countries: any) => {
      this.countries = countries
    })
  }
  getGraduationYears() {
    this.sharedService.getGraduationYears().subscribe((graduationYears: any) => {
      this.graduationYears = graduationYears
    })
  }
  getGovernorates() {
    this.sharedService.getGovernorates().subscribe((governorates: any) => {
      this.governorates = governorates
    })
  }
  getBranches() {
    this.sharedService.getBranches().subscribe((branches: any) => {
      this.branches = branches
    })
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      console.log(categories);
      this.categories = categories
    })
  }
  
  getCourses() {
    this.coursesService.getCoursesOfCategoryId(this.registerationForm.get('enquiry_category_id')?.value).subscribe((courses: any) => {
      console.log(courses);
      
      this.courses = courses
    })
  }

  validateForm() {
    if (
      !this.formValues.enquiry_name || 
      !this.formValues.enquiry_national_id ||
      !this.formValues.enquiry_email ||
      !this.formValues.genquiry_telephone
    ) {
      this.toastr.error('تأكد من جميع البانات المطلوبة')
      this.formValid = false
    } else if (this.registerationForm.invalid) {
      this.toastr.error('هناك خطأ ما,, تأكد من جميع البيانات')
      this.formValid = false
    } else {
      this.formValid = true
    }
    return this.formValid
  }

  save() {
    this.formSubmitted = true
    this.formValues = this.registerationForm.value
    console.log(this.registerationForm.value);

    if (this.validateForm()) {
      this.registerService.registerCourse(this.formValues).subscribe(res => {
        console.log(`res`, res);
        this.toastr.success("تم التسجيل بنجاح")
        this.modalService.hide();
      }, err => {
        console.log(err);
        if (err.error?.errors) {
          err.error?.errors.forEach((errorValue: any) => {
            this.toastr.error(errorValue.value)
          })
        } else if (err.error.message) {
          this.toastr.error(err.error.message)
        } else {
          this.toastr.error(err.message)
        }
      })
    }
  }

  closeModal() {
    this.modalService.hide();
  }

}
