import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { EditStorageComponent } from './edit-storage/edit-storage.component';
import { DeleteStorageComponent } from './delete-storage/delete-storage.component';
import { ViewStorageComponent } from './view-storage/view-storage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    StorageComponent,
    AddStorageComponent,
    EditStorageComponent,
    DeleteStorageComponent,
    ViewStorageComponent
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
export class StorageModule { }
