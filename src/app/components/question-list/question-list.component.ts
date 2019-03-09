import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() question:Question;
  @Input() profile: string;

  constructor() { }

  ngOnInit() {
  }

}
