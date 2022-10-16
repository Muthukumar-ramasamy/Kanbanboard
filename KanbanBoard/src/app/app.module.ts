import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialExampleModule} from '../app/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HttpClient,HttpClientModule } from "@angular/common/http";
import { BoardService } from './board/board.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,FormsModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
