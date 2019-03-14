import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { CreateQuestionComponent } from '../create-question/create-question.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() question: Question;
  @Input() profile: string;
  @Input() labId: string;
  languages = ['C', 'C++', 'Java','Python'];
  lang:string;
  constructor(private questionService:QuestionService,private router :Router,private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    if(this.question.programmingLang ==='python3')
      this.lang=this.languages[3];
     else if(this.question.programmingLang ==='c')
      this.lang=this.languages[0];
     else if(this.question.programmingLang ==='cpp')
      this.lang=this.languages[1];
     else
      this.lang=this.languages[2];
  }
  
  goToQuestion() {
    this.questionService.question = this.question;
    this.questionService.labId = this.labId;
    this.router.navigate(['/question']);
  }

  goToEdit()
  {
    this.bottomSheet.open(CreateQuestionComponent, {
      panelClass: 'cq-bottomsheet',
      data: { labId: this.labId, question:this.question }
    }
      );
  }
}
