import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { WorkTableComponent } from "./work-table/work-table.component";
import { CreateAssignmentFormComponent } from "./create-assignment-form/create-assignment-form.component";
import { UpdateAssignmentFormComponent } from "./update-assignment-form/update-assignment-form.component";
import { DeleteAssignmentFormComponent } from "./delete-assignment-form/delete-assignment-form.component";
import { FindAssignmentFormComponent } from "./find-assignment-form/find-assignment-form.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { AppRoutingModule } from "./app-routing.module";
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WorkTableComponent,
    CreateAssignmentFormComponent,
    UpdateAssignmentFormComponent,
    DeleteAssignmentFormComponent,
    FindAssignmentFormComponent,
    DocumentViewComponent,
    EmployeesViewComponent,
    ContextMenuComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModule],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
