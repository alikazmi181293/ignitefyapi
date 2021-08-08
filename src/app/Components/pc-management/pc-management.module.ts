import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcManagementComponent } from './pc-management.component';
import { AddPcManagementComponent } from './add-pc-management/add-pc-management.component';
import { DeletePcManagementComponent } from './delete-pc-management/delete-pc-management.component';
import { EditPcManagementComponent } from './edit-pc-management/edit-pc-management.component';
import { ViewPcManagementComponent } from './view-pc-management/view-pc-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    PcManagementComponent,
    AddPcManagementComponent,
    DeletePcManagementComponent,
    EditPcManagementComponent,
    ViewPcManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class PcManagementModule { }
