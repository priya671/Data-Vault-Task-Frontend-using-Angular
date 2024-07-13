import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  addCompany(company: Company){
    return this.http.post<Company>(`${this.baseUrl}/saveCompanyData`,company);
  }


  updateCompany(companyid:number, company: Company){
    return this.http.put<Company>(`${this.baseUrl}/updateDataVaultById/${companyid}`,company);
  }

  getCompanyById(id:number){
    return this.http.get<Company>(`${this.baseUrl}/getCompanyDataById/${id}`);
  }

}
