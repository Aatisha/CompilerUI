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


@NgModule({
  declarations: [
    AppComponent,HomeComponent, LoginComponent, SignupDialogComponent, DashboardCardComponent, DashboardComponent, NavbarComponent, CreateLabComponent, QuestionListComponent, QuestionListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule,HttpClientModule,FormsModule
  ],
  entryComponents: [
    SignupDialogComponent,CreateLabComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
