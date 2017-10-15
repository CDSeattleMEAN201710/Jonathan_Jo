import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import 
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FilterPipe } from './quotes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
        FormsModule, // <-- Include module in our AppModules
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
