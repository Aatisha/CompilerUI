import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-result-progress',
  templateUrl: './result-progress.component.html',
  styleUrls: ['./result-progress.component.scss']
})
export class ResultProgressComponent implements OnInit {

  result:string;
  constructor(private bottomSheetRef: MatBottomSheetRef<ResultProgressComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    debugger
    this.result = data.result;
   }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
