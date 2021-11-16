import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WorkTableComponent } from './work-table/work-table.component';
import { CreateAssignmentFormComponent } from './create-assignment-form/create-assignment-form.component';
import { UpdateAssignmentFormComponent } from './update-assignment-form/update-assignment-form.component';
import { DeleteAssignmentFormComponent } from './delete-assignment-form/delete-assignment-form.component';
import { FindAssignmentFormComponent } from './find-assignment-form/find-assignment-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WorkTableComponent,
    CreateAssignmentFormComponent,
    UpdateAssignmentFormComponent,
    DeleteAssignmentFormComponent,
    FindAssignmentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
