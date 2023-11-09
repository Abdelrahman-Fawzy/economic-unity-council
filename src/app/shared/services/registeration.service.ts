import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  registerCourse(model: any) {
    return this.http.post(`${this.baseUrl}/platform/enquiries/create`, model)
  }
}
