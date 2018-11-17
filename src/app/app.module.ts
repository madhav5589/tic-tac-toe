import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatRippleModule, MatGridListModule, MatSnackBarModule } from '@angular/material';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent, DialogOverviewExampleDialogComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatRippleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialogComponent]
})
export class AppModule { }
