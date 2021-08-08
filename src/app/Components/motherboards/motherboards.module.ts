import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotherboardsComponent } from './motherboards.component';
import { AddMotherboardComponent } from './add-motherboard/add-motherboard.component';
import { DeleteMotherboardComponent } from './delete-motherboard/delete-motherboard.component';
import { EditMotherboardComponent } from './edit-motherboard/edit-motherboard.component';
import { ViewMotherboardComponent } from './view-motherboard/view-motherboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    MotherboardsComponent,
    AddMotherboardComponent,
    DeleteMotherboardComponent,
    EditMotherboardComponent,
    ViewMotherboardComponent
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
export class MotherboardsModule { }
