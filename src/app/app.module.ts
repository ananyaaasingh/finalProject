import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HomeComponent } from './admin/home/home.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { QuestComponent } from './admin/quest/quest.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserQuizComponent } from './user/user-quiz/user-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    QuizComponent,
    QuestComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeComponent,
    UserProfileComponent,
    UserQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
