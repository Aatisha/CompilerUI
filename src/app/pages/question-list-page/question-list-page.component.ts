import { Component, OnInit } from '@angular/core';
import { LoginRes } from 'src/app/models/loginRes';
import { ActivatedRoute, Router } from '@angular/router';
import { GetQuestionByLabIdService } from 'src/app/services/question/get-question-by-lab-id.service';
import { Question } from 'src/app/models/question';
import { CommonResponses } from 'src/app/models/commonResponse';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateQuestionComponent } from 'src/app/components/create-question/create-question.component';

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.scss']
})
export class QuestionListPageComponent implements OnInit {
  emoji = '&#128515;';
  user : LoginRes= new LoginRes();
  labId:string;
  public questions : Question[] = [];
  constructor(private route:ActivatedRoute,private questionService:GetQuestionByLabIdService, private router : Router,private bottomSheet: MatBottomSheet) {
    this.route.params.subscribe(params=>this.labId = params.labId);
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login-data'));
    this.questionService.getQuestionByLabId(this.labId).subscribe((response : CommonResponses)=>{ 
      
      this.questions = response.question;
    });
  }

  goToCreate() {
    this.bottomSheet.open(CreateQuestionComponent, {
      panelClass: 'cq-bottomsheet',
      data: { labId: this.labId,question:null }
    }
      );
  }

}
