import { NgModule, ViewChildren } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { Route  } from '@angular/router';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { UploadaccComponent } from './uploadacc/uploadacc.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { ForgotComponent } from './forgot/forgot.component';
const appRoutes:Routes=
[
  {
    path:'',component:LayoutComponent,
    children:
    [
      {
        path:'',component:HomeComponent
      },
      {
        path:'Home',component:HomeComponent
      },
      {
        path:'Accounts',component:AccountsComponent
      }
    ],

  },

  {path:'Signup', component: SignupComponent},
  {path:'Forgot',component: ForgotComponent},
  {path:'Signin',component: SigninComponent},
];
   
  



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,

    AccountsComponent,
     CreateAccComponent,
     UploadaccComponent,
     HomeMenuComponent,
     LayoutComponent,
     
     ForgotComponent
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
