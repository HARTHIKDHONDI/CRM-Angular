import { NgModule, ViewChildren } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Route  } from '@angular/router';
import {Routes,RouterModule} from '@angular/router';
import { DatePipe } from '@angular/common';
import{HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { UploadaccComponent } from './accounts/uploadacc/uploadacc.component';

import { LayoutComponent } from './layout/layout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AccNameComponent } from './acc-name/acc-name.component';
import { InfoComponent } from './info/info.component';
import { ContactAccComponent } from './contact-acc/contact-acc.component';
import { OpportunitiesAccComponent } from './opportunities-acc/opportunities-acc.component';
import { LeadsAccComponent } from './leads-acc/leads-acc.component';
import { CommunicationsAccComponent } from './communications-acc/communications-acc.component';
import { TaskComponent } from './task/task.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { RegComponent } from './reg/reg.component';
import { AddEditRegComponent } from './reg/add-edit-reg/add-edit-reg.component'; 
import { AccService } from './Shared/acc.service';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { CreateOppComponent } from './opportunities/create-opp/create-opp.component';
import { OppService } from './Shared/opp.service';
import { LeadComponent } from './lead/lead.component';
import { AddleadComponent } from './lead/addlead/addlead.component';
import { APImainService } from './Shared/apimain.service';
import { ContactComponent } from './contact/contact.component';
import { CreateConComponent } from './contact/create-con/create-con.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { UploadConComponent } from './contact/upload-con/upload-con.component';
import { UploadLeadComponent } from './lead/upload-lead/upload-lead.component';
import { LeadService } from './Shared/lead.service';
import { ContactService } from './Shared/contact.service';
import { RegService } from './Shared/reg.service';
import { NotesService } from './Shared/notes.service';
import { UploadOppComponent } from './opportunities/upload-opp/upload-opp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

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
      },
      {
        path:'Contacts',component:ContactComponent
      },
      {
        path:'Opportunities',component:OpportunitiesComponent
      },
      {
        path:'Leads',component:LeadComponent
      },
      {
        path:'Notes',component:NotesComponent
      },
      {
        path:'Task',component:TaskComponent
      },
      {
        path:'Register',component:RegComponent
      }
    ],

  },
  // {
  //        path:'AccName',component:AccNameComponent
  //      },
 
  {path:'Forgot',component: ForgotComponent},
  {path:'Signin',component: SigninComponent},
  {path:'Reg',component: RegComponent},
  {path:'**',component: ErrorpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    SigninComponent,

    AccountsComponent,
     CreateAccComponent,
     UploadaccComponent,
     
     LayoutComponent,
     
     ForgotComponent,
     AccNameComponent,
     ContactAccComponent,
     OpportunitiesAccComponent,
     LeadsAccComponent,
     CommunicationsAccComponent,
     TaskComponent,
     CreateTaskComponent,
     RegComponent,
     AddEditRegComponent,
     OpportunitiesComponent,
     CreateOppComponent,
     LeadComponent,
     AddleadComponent,
     ContactComponent,
     CreateConComponent,
     NotesComponent,
     CreateNoteComponent,
     UploadConComponent,
     UploadLeadComponent,
     UploadOppComponent,
     ErrorpageComponent
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule 
  ],
  
  providers: [AccService,OppService,LeadService,ContactService,RegService,NotesService,DatePipe,APImainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
