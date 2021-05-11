import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyB0XGJRmHfhQgMBENMchB09vTeAOQu8VW8",
  authDomain: "after-swipe-demo.firebaseapp.com",
  projectId: "after-swipe-demo",
  storageBucket: "after-swipe-demo.appspot.com",
  messagingSenderId: "87728755491",
  appId: "1:87728755491:web:b4cb26c65f8374c950b296"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], {
      developmentMode: false
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
