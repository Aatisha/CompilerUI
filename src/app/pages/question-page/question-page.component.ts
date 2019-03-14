import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';
import { LoginRes } from 'src/app/models/loginRes';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  question : Question;
  labId:string;
  user: LoginRes= new LoginRes();
  constructor(private questionService : QuestionService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login-data'));
    this.question = this.questionService.question;
    this.labId = this.questionService.labId;
  }

}
