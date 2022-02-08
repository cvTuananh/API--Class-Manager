import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { IndexComponent } from './Admin/index/index.component';
import { CreateClassComponent } from './Admin/create-class/create-class.component';
import { TableComponent } from './Admin/table/table.component';
import { ShowClassComponent } from './profile/show-class/show-class.component';
import { CalendarStudyComponent } from './profile/calendar-study/calendar-study.component';
import { ShowRegisteredComponent } from './profile/show-registered/show-registered.component';
import { ManagerRegisterComponent } from './Admin/manager-register/manager-register.component';
import { ViewsUserComponent } from './Admin/views-user/views-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    VerifyEmailComponent,
    IndexComponent,
    CreateClassComponent,
    TableComponent,
    ShowClassComponent,
    CalendarStudyComponent,
    ShowRegisteredComponent,
    ManagerRegisterComponent,
    ViewsUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AngularFileUploaderModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
