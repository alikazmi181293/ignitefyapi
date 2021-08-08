import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasingsComponent } from './casings.component';
import { AddCasingComponent } from './add-casing/add-casing.component';
import { DeleteCasingComponent } from './delete-casing/delete-casing.component';
import { EditCasingComponent } from './edit-casing/edit-casing.component';
import { ViewCasingComponent } from './view-casing/view-casing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    CasingsComponent,
    AddCasingComponent,
    DeleteCasingComponent,
    EditCasingComponent,
    ViewCasingComponent
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
export class CasingsModule { }
