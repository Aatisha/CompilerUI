import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { CodeEditorComponent } from 'src/app/components/code-editor/code-editor.component';
import { Solution } from 'src/app/models/solution';
import { LoginRes } from 'src/app/models/loginRes';
import { SolutionService } from 'src/app/services/solution/solution.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-coding-page',
  templateUrl: './coding-page.component.html',
  styleUrls: ['./coding-page.component.scss']
})
export class CodingPageComponent implements OnInit {

  // solution:Solution;
  @ViewChild(CodeEditorComponent) codeEditor: CodeEditorComponent; // editor component instance
  @Input() labId:string;
  @Input() questionId:string;
  @Input() lang:string;
  solution:Solution = new Solution();
  user : LoginRes= new LoginRes();
  @ViewChild(CodeEditorComponent) input :string;
  @ViewChild(CodeEditorComponent) output:string;
  constructor(private service : SolutionService,private snackBar: MatSnackBar) { }

  ngOnInit () {
    this.user = JSON.parse(localStorage.getItem('login-data'));
   }

  private consoleCode() {
    console.log(this.codeEditor.getContent());
  }

  private saveCode()
  {
    this.solution.solution_file = this.codeEditor.getContent();
    this.solution.labId = this.labId;
    this.solution.questionId = this.questionId;
    this.solution.userId = this.user.userId;
    debugger
    console.log(this.solution.solution_file);
    this.service.saveSolution(this.solution).subscribe(response=>{ 
      console.log('Response-'+response.responseMessage);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
    });
  }
  
  private compileCode()
  {
    this.solution.solution_file = this.codeEditor.getContent().substring(1,this.codeEditor.getContent().length-1);
    this.solution.questionId = this.questionId;
    debugger
    this.service.compileSolution(this.solution).subscribe(response=>{ 

      if(response.statusCode===200){
      this.snackBar.open("Compilation Successful.", 'Ok', {duration: 3000});
      debugger
      }
      else{
      this.snackBar.open("Error while compiling", 'Ok', {duration: 3000});
      debugger
      }

    });
  }

  private runCode()
  {
    this.solution.solution_file = this.codeEditor.getContent().substring(1,this.codeEditor.getContent().length-1);
    this.solution.questionId = this.questionId;
    this.solution.input = this.codeEditor.getInput().substring(1,this.codeEditor.getInput().length-1);
    debugger
    this.service.runSolution(this.solution).subscribe(response=>{ 
      this.codeEditor.setOutput(response.output)
    });
  }

  private submitCode()
  {
    this.solution.solution_file = this.codeEditor.getContent();
    this.solution.questionId = this.questionId;
    debugger
    this.service.submitSolution(this.solution).subscribe(response=>{ 
      console.log('Response-'+response.responseMessage);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
    });
  }

  private beautifyContent() {
    this.codeEditor.beautifyContent();
  }

 

}
