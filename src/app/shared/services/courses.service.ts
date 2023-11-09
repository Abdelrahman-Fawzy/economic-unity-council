import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCourseByID(id: number) {
    return this.http.get(`${this.baseUrl}/platform/courses/${id}`)
  }

  getCoursesOfCategoryId(id: number) {
    return this.http.get(`${this.baseUrl}/platform/courses/by/${id}`)
  }
}
