import {ICompany} from "./company";

export interface IVacancy {
  name: string
  description: string
  salary: number
  company: ICompany
}
