import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() question: Question;
  @Input() profile: string;

  constructor(private questionService:QuestionService,private router :Router) { }

  ngOnInit() {
  }

  goToQuestion() {
    this.questionService.question = this.question;
    this.router.navigate(['/question']);
  }
}
