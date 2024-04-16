import {Component, Input} from "@angular/core";
import {ICompany} from "../../models/company";
import {IVacancy} from "../../models/vacancy";


@Component({
  selector: 'app-vacancy',
  standalone: true,
  templateUrl: 'vacancy.component.html'
})
export class VacancyComponentComponent {
  @Input() vacancy: IVacancy
}
