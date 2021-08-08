import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGraphicCardComponent } from './add-graphic-card/add-graphic-card.component';
import { GraphicCardComponent } from './graphic-card.component';
import { DeleteGraphicCardComponent } from './delete-graphic-card/delete-graphic-card.component';
import { EditGraphicCardComponent } from './edit-graphic-card/edit-graphic-card.component';
import { ViewGraphicCardComponent } from './view-graphic-card/view-graphic-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    GraphicCardComponent,
    AddGraphicCardComponent,
    DeleteGraphicCardComponent,
    EditGraphicCardComponent,
    ViewGraphicCardComponent
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
export class GraphicCardModule { }
