import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessorsComponent } from './processors.component';
import { AddProcessorComponent } from './add-processor/add-processor.component';
import { DeleteProcessorComponent } from './delete-processor/delete-processor.component';
import { EditProcessorComponent } from './edit-processor/edit-processor.component';
import { ViewProcessorComponent } from './view-processor/view-processor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ProcessorsComponent,
    AddProcessorComponent,
    DeleteProcessorComponent,
    EditProcessorComponent,
    ViewProcessorComponent
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
export class ProcessorsModule { }
