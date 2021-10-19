import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog-content',
  templateUrl: './custom-dialog-content.component.html',
  styleUrls: ['./custom-dialog-content.component.css']
})
export class CustomDialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
