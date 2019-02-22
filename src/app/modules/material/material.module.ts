import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatCardModule,MatToolbarModule,MatSelectModule,
    MatRadioModule,MatSnackBarModule
  ],
  exports: [
    MatSidenavModule,MatButtonModule,MatIconModule,MatFormFieldModule, MatInputModule,MatDialogModule,MatCardModule,MatToolbarModule,MatSelectModule,
    MatRadioModule,MatSnackBarModule
  ]
})
export class MaterialModule { }
