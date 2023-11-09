import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterationModalComponent } from '../shared/registeration-modal/registeration-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('slides') slides!: QueryList<ElementRef>;
  @ViewChildren('demo') demo!: QueryList<ElementRef>;
  slideIndex = 1;
// showSlides(slideIndex);

  images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    sliders = [
      {caption: 'برامج تدريبية متخصصة فى إعداد المعلمين', id: 1},
      {caption: 'برامج تدريبية متخصصة فى السياحة و الفنادق', id: 2},
      {caption: 'برامج تدريبية متخصصة فى الخدمات البترولية', id: 3},
      {caption: 'برامج تدريبية متخصصة فى اللغة الإنجليزية المتخصصة', id: 4},
      {caption: 'برامج تدريبية متخصصة فى المساحة و الخرائط', id: 5},
      {caption: 'برامج تدريبية فى التنمية البشرية', id: 6},
      {caption: 'برامج تدريبية متخصصة فى الخدمات الطبية', id: 7},
      {caption: 'برامج تدريبية متخصصة فى تكنولوجيا المعلومات', id: 8},
      {caption: 'برامج تدريبية متخصصة فى الصحافة و الاعلام', id: 9},
      {caption: 'برامج تدريبية متخصصة فى إدارة الأعمال', id: 10},
    ]

    modalRef?: BsModalRef;

    constructor(private modalService: BsModalService) {}

    ngOnInit() {
    }

    ngAfterViewInit(): void {
      this.showSlides(this.slideIndex);
    }

    plusSlides(n: any) {
      console.log(`this.slideIndex`, this.slideIndex);
      this.showSlides(this.slideIndex += n);
    }

    currentSlide(n: any) {
      console.log(`this.slidePrevIndex`, this.slideIndex);
      this.showSlides(this.slideIndex = n);
    }

    showSlides(n: any) {
      let i;
      let slides = this.slides.toArray();
      // let dots = this.demo.toArray();
      let captionText = document.getElementById("caption");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].nativeElement.style.display = "none";
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].nativeElement.className = dots[i].nativeElement.className.replace(" active", "");
      // }
      slides[this.slideIndex-1].nativeElement.style.display = "block";
      // console.log(dots[this.slideIndex - 1]);
      
      // dots[this.slideIndex-1].nativeElement.className += " active";
      // dots[this.slideIndex-1].nativeElement.classList.add("active");
      // captionText!.innerHTML = dots[this.slideIndex-1].alt;
    }

    register() {
      this.modalRef = this.modalService.show(RegisterationModalComponent, { class: 'modal-xl modal-dialog-centered' });
    }

}
