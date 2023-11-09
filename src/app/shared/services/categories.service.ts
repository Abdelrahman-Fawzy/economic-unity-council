import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.baseUrl}/platform/categories`)
  }
}
