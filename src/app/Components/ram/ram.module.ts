import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamComponent } from './ram.component';
import { AddRamComponent } from './add-ram/add-ram.component';
import { EditRamComponent } from './edit-ram/edit-ram.component';
import { ViewRamComponent } from './view-ram/view-ram.component';
import { DeleteRamComponent } from './delete-ram/delete-ram.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    RamComponent,
    AddRamComponent,
    EditRamComponent,
    ViewRamComponent,
    DeleteRamComponent
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
export class RamModule { }
