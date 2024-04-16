import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICompany } from "../models/company";
import {IVacancy} from "../models/vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService{
  constructor(private http: HttpClient) {
  }

  getByID(id:number): Observable<IVacancy[]>{
    return this.http.get<IVacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies`)
  }
}
