import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from '../app/app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseTemplateModule } from './shared/templates/base-template/base-template.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignComponent } from './components/sign/sign.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "../app/auth.service";
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { AuthGuard } from './shared/guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseTemplateModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule { }
