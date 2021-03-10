import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {SharedService} from './shared.service';
import { AddEditUsersComponent } from './user/add-edit-users/add-edit-users.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowUsersComponent } from './user/show-users/show-users.component';

@NgModule({
  declarations: [	
    AppComponent,
      UserComponent,
      AddEditUsersComponent,
      ShowUsersComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
