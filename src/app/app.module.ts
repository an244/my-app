import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import Forms Module de su dung two-way binding
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    // import Forms Module de su dung two-way binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
