import { Component, OnInit, Inject } from '@angular/core';
import { GetTeacherByDeptService } from 'src/app/services/lab/get-teacher-by-dept.service';
import { SignupReq } from 'src/app/models/SignupReq';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MatDialogRef,MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { Lab } from 'src/app/models/lab';
import { AddLabService } from 'src/app/services/lab/add-lab.service';
@Component({
  selector: 'app-create-lab',
  templateUrl: './create-lab.component.html',
  styleUrls: ['./create-lab.component.scss']
})
export class CreateLabComponent implements OnInit {
  years: number[]=[2015,2016,2017,2018,2019,2020,2021,2022,2023];
  section: string[]=['A','B','C'];
  public users :  SignupReq[] = [];
  public formRequest=new Lab();
    constructor(public dialogRef: MatDialogRef<DashboardComponent>,private service:GetTeacherByDeptService,@Inject(MAT_DIALOG_DATA) public data: any,private labService:AddLabService,private snackBar: MatSnackBar) { }


  ngOnInit() {

    this.service.getTeacherByDept(this.data.dept).subscribe(response=>{ 
      this.users=response;
    });
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(request:Lab){
    console.log(request);
    request.assignee = this.data.assignee;
    this.labService.addLab(request).subscribe(response=>{
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
      this.dialogRef.close();
    });

    
    }

}
