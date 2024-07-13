import { Component, OnInit } from '@angular/core';
import { CompanyService } from './Service/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  companyname:string="";
  companyaddress:string="";
  companyemail:string="";
  companyphonenumber:string="";


  comp:Company = new Company(this.companyname, this.companyaddress, this.companyemail, this.companyphonenumber);

  constructor(private companyservice:CompanyService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
  }

  saveCompany(){
    this.companyservice.addCompany(this.comp).subscribe(
      (company:Company)=>{
        if(company){
          this.comp = company;
          console.log(company.companyphonenumber);
          console.log(company);
          alert("Company Data Saved!");
        }
        else{
          alert("Company already exists!");
        }


    },
    (error: any) => {
      console.error("Registration error:", error);
      alert("Registration error!");
    })
  }


  updateCompany(){
    this.router.navigate(['updatecompany']);
  }


  title = 'DataVaultTask';
}



export class Company{

  constructor(public companyname:string, public companyaddress:string, public companyemail:string, public companyphonenumber:string){}
}


