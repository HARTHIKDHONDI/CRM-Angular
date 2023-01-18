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
import { AccNameComponent } from './acc-name/acc-name.component';
import { InfoComponent } from './info/info.component';
import { ContactAccComponent } from './contact-acc/contact-acc.component';
import { OpportunitiesAccComponent } from './opportunities-acc/opportunities-acc.component';
import { LeadsAccComponent } from './leads-acc/leads-acc.component';
import { CommunicationsAccComponent } from './communications-acc/communications-acc.component';
const appRoutes:Routes=
[
  {
    path:'',component:LayoutComponent,
    children:
    [
      {
        path:'Home',component:HomeComponent
      },
      {
        path:'Accounts',component:AccountsComponent
        
      },
      {
        path:'AccName',component:AccNameComponent,
        children:[
          {
            path:'Info',component:InfoComponent
          },
          {
            path:'ContactAcc',component:ContactAccComponent
          },
          {
            path:'OpportunitiesAcc',component:OpportunitiesAccComponent
          },
          {
            path:'LeadsAcc',component:LeadsAccComponent
          },
          {
            path:'CommunicationsAcc',component:CommunicationsAccComponent
          },
        ]
      }
    ],

  },
  // {
  //        path:'AccName',component:AccNameComponent
  //      },
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
     
     ForgotComponent,
     AccNameComponent,
     ContactAccComponent,
     OpportunitiesAccComponent,
     LeadsAccComponent,
     CommunicationsAccComponent
     

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
