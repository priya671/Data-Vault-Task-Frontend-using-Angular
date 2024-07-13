import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCompanyComponent } from './Component/update-company/update-company.component';

const routes: Routes = [
  {path:'updatecompany',component:UpdateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
