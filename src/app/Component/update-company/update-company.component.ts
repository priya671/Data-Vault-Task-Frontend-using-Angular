import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit{

updateCompanyForm: FormGroup;

constructor(private formBuilder: FormBuilder, private companyservice: CompanyService) {}

ngOnInit(): void {
  this.updateCompanyForm = this.formBuilder.group({
    companyid: ['', Validators.required,],
    companyname: ['', Validators.required],
    companyaddress: ['', Validators.required],
    companyemail: ['', [Validators.required, Validators.email]],
    companyphonenumber: ['', Validators.required]
  });
}

updateCompanyData() {
  if (this.updateCompanyForm.valid) {
    const comp = this.updateCompanyForm.value;
    console.log('Company Data:', comp);

    this.companyservice.updateCompany(comp.companyid, comp).subscribe(
      data => {
        if (comp.companyid !== -1) {
          alert('Company Data Updated!');
        } else {
          alert('Company Data not Found!');
        }
      },
      error => {
        console.error('Unknown Error:', error);
        alert('Company Data not found!');
      }
    );
  } else {
    alert('Please fill out all required fields correctly.');
  }
}
}

export class Company{
  constructor(public companyid:number,public companyname:string, public companyaddress:string, public companyemail:string, public companyphonenumber:string){}
}
