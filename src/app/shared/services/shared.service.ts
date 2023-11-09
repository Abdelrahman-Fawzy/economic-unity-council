import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getQualifications() {
    return this.http.get(`${this.baseUrl}/institutionsManagement/get_qualifications`)
  }
  getCountries() {
    return this.http.get(`${this.baseUrl}/institutionsManagement/get_countries`)
  }
  getGraduationYears() {
    return this.http.get(`${this.baseUrl}/institutionsManagement/get_graduationYear`)
  }
  getGovernorates() {
    return this.http.get(`${this.baseUrl}/institutionsManagement/get_governorates`)
  }
  getBranches() {
    return this.http.get(`${this.baseUrl}/institutionsManagement/get_branches`)
  }
}
