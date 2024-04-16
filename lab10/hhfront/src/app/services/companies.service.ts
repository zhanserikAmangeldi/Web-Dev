import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import { ICompany } from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICompany[]>{
    return this.http.get<ICompany[]>('http://127.0.0.1:8000/api/companies/')
  }

  addCompany(company: any) {
    let new_company = {
      'name': company.name,
      'description': company.description,
      'city': company.city,
      'address': company.address
    }
    return this.http.post('http://127.0.0.1:8000/api/companies/', new_company).subscribe(response => console.log(response))
  }

  deleteCompany(id:number){
    return this.http.delete(`http://127.0.0.1:8000/api/companies/${id}/`).subscribe(response=>console.log(response))
  }

}
