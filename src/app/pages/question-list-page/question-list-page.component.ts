import { Component, OnInit } from '@angular/core';
import { LoginRes } from 'src/app/models/loginRes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateLabComponent } from 'src/app/components/create-lab/create-lab.component';
import { ActivatedRoute } from '@angular/router';
import { GetQuestionByLabIdService } from 'src/app/services/question/get-question-by-lab-id.service';
import { Question } from 'src/app/models/question';
import { CommonResponses } from 'src/app/models/commonResponse';

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.scss']
})
export class QuestionListPageComponent implements OnInit {

  user : LoginRes= new LoginRes();
  labId:string;
  public questions : Question[] = [];
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private questionService:GetQuestionByLabIdService) {
    this.route.params.subscribe(params=>this.labId = params.labId);
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login-data'));
    this.questionService.getQuestionByLabId(this.labId).subscribe((response : CommonResponses)=>{ 
      console.log('Response-');
      this.questions = response.question;
    });
  }

  

  openDialog(): void {
    console.log(this.user.dept)
    const dialogRef = this.dialog.open(CreateLabComponent, {
      width: '700px',
      data: {
        dept: this.user.dept,
        assignee:this.user.userId
      }
    });
  }

}
