import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { HttpModule } from '@angular/http';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import {FileUploadComponent} from  '../file-upload.component';

@NgModule({ declarations: [ AppComponent,FileUploadComponent ], imports: [ CommonModule, HttpModule, ToolbarModule, GridAllModule,UploaderModule, BrowserModule,       NumericTextBoxAllModule, DialogModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule, CheckBoxModule], providers: [],
exports:[FileUploadComponent], bootstrap: [AppComponent]
})
export class AppModule { }
