import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { EmployeesViewComponent } from "./employees-view/employees-view.component";

const routes: Routes = [
  { path: "employees", component: EmployeesViewComponent },
  { path: "assignments/:id", component: DocumentViewComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
