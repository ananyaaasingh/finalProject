import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { QuestComponent } from './admin/quest/quest.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserQuizComponent } from './user/user-quiz/user-quiz.component';

const routes: Routes = [
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'register' , component : RegisterComponent
  },
  {
    path : 'admin-dashboard' , component : DashboardComponent,
    children : [
      {
        path : 'admin-home' , component : HomeComponent
      },
      {
        path : 'admin-profile' , component : ProfileComponent
      },
      {
        path : 'admin-quest' , component : QuestComponent
      },
      {
        path : 'admin-quiz' , component : QuizComponent
      },
      {
        path : '' , redirectTo : '/admin/home' , pathMatch : 'full'
      }
    ]
  },
  {
    path : 'user-dashboard' , component : UserDashboardComponent,
    children : [
      {
        path : 'user-home' , component : UserHomeComponent
      },
      {
        path : 'user-profile' , component : UserProfileComponent
      },
      {
        path : 'user-quiz' , component : UserQuizComponent
      },
      { 
        path : '' , redirectTo : '/user-dashboard/user-home' , pathMatch : 'full'
      }
    ]
  },
  {
    path : '' , redirectTo : '/register' , pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
