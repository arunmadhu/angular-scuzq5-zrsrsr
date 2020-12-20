import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { employeeData } from "./data";
import { DetailRowService } from "@syncfusion/ej2-angular-grids";
import { Internationalization } from "@syncfusion/ej2-base";
import { RowDDService, SelectionService } from "@syncfusion/ej2-angular-grids";
import { EmitType, detach } from "@syncfusion/ej2-base";
import {
  UploaderComponent,
  RemovingEventArgs
} from "@syncfusion/ej2-angular-inputs";
import {
  createSpinner,
  showSpinner,
  hideSpinner
} from "@syncfusion/ej2-popups";
import { CheckBoxComponent } from "@syncfusion/ej2-angular-buttons";

let instance: Internationalization = new Internationalization();

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  providers: [DetailRowService, RowDDService, SelectionService],

  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public data: any;
  public selectOptions: Object;
  constructor() {}
  public dropEle: HTMLElement;
  public dropEle1: HTMLElement;

  ngOnInit(): void {
    this.data = employeeData;
    this.dropEle = document.getElementsByClassName(
      "uploadfile"
    )[0] as HTMLElement;
    this.selectOptions = { type: "Multiple" };
  }
  public onCreate(): void {
    this.dropEle1 = document.getElementsByClassName(
      "GridUploadfile"
    )[0] as HTMLElement;
  }

  public format(value: Date): string {
    return instance.formatDate(value, { skeleton: "yMd", type: "date" });
  }
}

export interface DateFormat extends Window {
  format?: Function;
}
