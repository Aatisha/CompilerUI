import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionListPageComponent } from './pages/question-list-page/question-list-page.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CodingPageComponent } from './pages/coding-page/coding-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'questionlist/:labId',component:QuestionListPageComponent},
  {path:'create/:labId',component:CreateQuestionComponent},
  {path:'coding',component:CodingPageComponent},
  {path:'question',component:QuestionPageComponent},
  {path:'chat',component:ChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
