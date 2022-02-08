import { ShowRegisteredComponent } from './profile/show-registered/show-registered.component';
import { ShowClassComponent } from './profile/show-class/show-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { IndexComponent } from './Admin/index/index.component';
import { CreateClassComponent } from './Admin/create-class/create-class.component';
import { TableComponent } from './Admin/table/table.component';
import { CalendarStudyComponent } from './profile/calendar-study/calendar-study.component';
import { ManagerRegisterComponent } from './Admin/manager-register/manager-register.component';
import { ViewsUserComponent } from './Admin/views-user/views-user.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile-user',component:ProfileComponent,
    children:[
      {path:'calendar-study',component:CalendarStudyComponent},
      {path:'list-class',component:ShowClassComponent},
      {path:'list-registered',component:ShowRegisteredComponent}
    ]
  },
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'admin',component:IndexComponent,
    children:[
      { path:'create-class',component:CreateClassComponent},
      {path:'manager',component:TableComponent},
      {path:'manger-register',component:ManagerRegisterComponent},
      {path:'view-user-class',component:ViewsUserComponent}
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
