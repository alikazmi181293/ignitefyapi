import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerSuppliesComponent } from './power-supplies.component';
import { AddPowerSupplyComponent } from './add-power-supply/add-power-supply.component';
import { EditPowerSupplyComponent } from './edit-power-supply/edit-power-supply.component';
import { DeletePowerSupplyComponent } from './delete-power-supply/delete-power-supply.component';
import { ViewPowerSupplyComponent } from './view-power-supply/view-power-supply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PowerSuppliesComponent,
    AddPowerSupplyComponent,
    EditPowerSupplyComponent,
    DeletePowerSupplyComponent,
    ViewPowerSupplyComponent
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
export class PowerSuppliesModule { }
