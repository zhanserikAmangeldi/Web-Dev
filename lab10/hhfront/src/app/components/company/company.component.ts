import {Component, Input, OnInit} from "@angular/core";
import {ICompany} from "../../models/company";
import {IVacancy} from "../../models/vacancy";
import {VacanciesService} from "../../services/vacancies.service";
import {VacancyComponentComponent} from "../vacancy/vacancy.component";
import {CommonModule} from "@angular/common";
import {FormControl} from "@angular/forms";
import {CompanyService} from "../../services/companies.service";
import {AppComponent} from "../../app.component";


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    VacancyComponentComponent, CommonModule
  ],
  templateUrl: 'company.component.html'
})
export class CompanyComponent implements OnInit{
  @Input() company: ICompany
  vacancies: IVacancy[]

  showVacancy = false

  constructor(private vacanciesService: VacanciesService, private companiesService: CompanyService, private appComponent: AppComponent) {
  }

  onBtnDelete():void{
    this.companiesService.deleteCompany(this.company.id)
  }

  ngOnInit(): void {
    this.vacanciesService.getByID(this.company.id).subscribe(vacancies => {
      this.vacancies = vacancies
    })
  }
}
