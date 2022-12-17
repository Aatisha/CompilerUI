import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { CodeEditorComponent } from "src/app/components/code-editor/code-editor.component";
import { Solution } from "src/app/models/solution";
import { LoginRes } from "src/app/models/loginRes";
import { SolutionService } from "src/app/services/solution/solution.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ResultProgressComponent } from "src/app/components/result-progress/result-progress.component";

@Component({
  selector: "app-coding-page",
  templateUrl: "./coding-page.component.html",
  styleUrls: ["./coding-page.component.scss"],
})
export class CodingPageComponent implements OnInit {
  // solution:Solution;
  @ViewChild(CodeEditorComponent, { static: true })
  codeEditor: CodeEditorComponent; // editor component instance
  @Input() labId: string;
  @Input() questionId: string;
  @Input() lang: string;
  solution: Solution = new Solution();
  progressBar = false;
  user: LoginRes = new LoginRes();
  @ViewChild(CodeEditorComponent, { static: true }) input: string;
  @ViewChild(CodeEditorComponent, { static: true }) output: string;
  result: string;
  constructor(
    private service: SolutionService,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("login-data"));
  }

  consoleCode() {
    
  }

  saveCode() {
    this.solution.solution_file = this.codeEditor.getContent();
    this.solution.labId = this.labId;
    this.solution.questionId = this.questionId;
    this.solution.userId = this.user.userId;
    this.progressBar = !this.progressBar;
    
    
    this.service.saveSolution(this.solution).subscribe(
      (response) => {
        this.progressBar = !this.progressBar;
        
        
        this.snackBar.open(response.responseMessage, "Ok", { duration: 1500 });
      },
      (error) => {
        
        this.progressBar = !this.progressBar;
      }
    );
  }

  compileCode() {
    this.solution.solution_file = this.codeEditor
      .getContent()
      .substring(1, this.codeEditor.getContent().length - 1);
    this.solution.questionId = this.questionId;
    this.progressBar = !this.progressBar;
    
    this.service.compileSolution(this.solution).subscribe(
      (response) => {
        this.progressBar = !this.progressBar;
        if (response.statusCode === 200) {
          this.snackBar.open("Compilation Successful.", "Ok", {
            duration: 3000,
          });
          
        } else {
          this.snackBar.open("Error while compiling", "Ok", { duration: 3000 });
          
        }
      },
      (error) => {
        this.progressBar = !this.progressBar;
      }
    );
  }

  runCode() {
    this.solution.solution_file = this.codeEditor
      .getContent()
      .substring(1, this.codeEditor.getContent().length - 1);
    this.solution.questionId = this.questionId;
    this.solution.input = this.codeEditor
      .getInput()
      .substring(1, this.codeEditor.getInput().length - 1);
    
    this.progressBar = !this.progressBar;
    this.service.runSolution(this.solution).subscribe(
      (response) => {
        this.progressBar = !this.progressBar;
        this.codeEditor.setOutput(response.output);
      },
      (error) => {
        this.progressBar = !this.progressBar;
      }
    );
  }

  submitCode() {
    this.solution.solution_file = this.codeEditor
      .getContent()
      .substring(1, this.codeEditor.getContent().length - 1);
    this.solution.labId = this.labId;
    this.solution.questionId = this.questionId;
    this.solution.userId = this.user.userId;
    
    this.progressBar = !this.progressBar;
    this.service.submitSolution(this.solution).subscribe(
      (response) => {
        this.progressBar = !this.progressBar;
        this.result = response.result;
        
        this.snackBar.open(response.responseMessage, "Ok", { duration: 1500 });
      },
      (error) => {
        this.progressBar = !this.progressBar;
      }
    );
  }

  statusCode() {
    this.bottomSheet.open(ResultProgressComponent, {
      data: { result: this.result },
    });
  }

  beautifyContent() {
    this.codeEditor.beautifyContent();
  }
}
