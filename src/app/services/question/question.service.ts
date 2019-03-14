import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public question : Question;
  public labId:string;
  constructor() { }
}
