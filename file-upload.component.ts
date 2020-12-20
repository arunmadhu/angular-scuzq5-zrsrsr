import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

dropEle: HTMLElement;

ngOnInit(): void {
}

 onUploaderCreate() {
    this.dropEle = document.getElementsByClassName("droparea")[0] as HTMLElement;
  }

}