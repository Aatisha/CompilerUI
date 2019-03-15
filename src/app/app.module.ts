import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule} from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateLabComponent } from './components/create-lab/create-lab.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionListPageComponent } from './pages/question-list-page/question-list-page.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CodingPageComponent } from './pages/coding-page/coding-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuestionTabComponent } from './components/question-tab/question-tab.component';
import { ChatComponent } from './components/chat/chat.component';
import { ResultProgressComponent } from './components/result-progress/result-progress.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent, LoginComponent,
    SignupDialogComponent, DashboardCardComponent, 
    DashboardComponent, NavbarComponent, CreateLabComponent,
     QuestionListComponent, QuestionListPageComponent, 
     CreateQuestionComponent, CodeEditorComponent, CodingPageComponent,
      QuestionPageComponent, QuestionTabComponent, ChatComponent, ResultProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule,HttpClientModule,FormsModule
  ],
  entryComponents: [
    SignupDialogComponent,CreateLabComponent, ResultProgressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
