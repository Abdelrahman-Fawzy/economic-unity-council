import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getData() {
    return [
        {
            itemImageSrc: 'assets/images/slider/first.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'assets/images/slider/second.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'assets/images/slider/third.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'assets/images/slider/fourth.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: 'assets/images/slider/fifth.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: 'assets/images/slider/sixth.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: 'assets/images/slider/seventh.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: 'assets/images/slider/eights.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            itemImageSrc: 'assets/images/slider/ninth.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            itemImageSrc: 'assets/images/slider/tenth.svg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        },
    ];
}

  getImages() {
      return Promise.resolve(this.getData());
  }
}
