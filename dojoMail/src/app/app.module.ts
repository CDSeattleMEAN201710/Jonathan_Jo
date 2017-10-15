import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent
    UserDetailComponent
    //whatever component u want to add
  ],
  imports: [
    BrowserModule
    FormsModule,
    Httpmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
