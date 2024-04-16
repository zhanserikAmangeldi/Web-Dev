import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompanyComponent} from "./components/company/company.component";
import {ICompany} from "./models/company";
import {CompanyService} from "./services/companies.service";
import {CommonModule} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hhfront';

  companies: ICompany[];

  createCompanyForm = this.fb.group({
    name: '',
    description: '',
    city: '',
    address: ''
  })


  constructor(private companyService: CompanyService, private fb: FormBuilder, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.companyService.getAll().subscribe(companies => {
      this.companies = companies
    })
  }

  refresh() {
    this.companyService.getAll().subscribe((data: ICompany[]) => {
      this.companies = data;
      this.changeDetectorRefs.detectChanges();
    })
  }


  onSubmit() {
    this.companyService.addCompany(this.createCompanyForm.value)
    this.createCompanyForm.reset()
  }
}
