import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscriber } from 'rxjs';

import{HttpClient}from '@angular/common/http'
import { AccService } from '../Shared/acc.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent  {
  constructor(private route :Router,public service:AccService,private http:HttpClient) { 



  }
    list:any[];
    Activatesubmitacc=false;
    account:any;
   ngOnInit() {

    this.refreshaccounts();
  
    }
    refreshaccounts(){
      this.service.getmethod().subscribe(
        data=>{
        this.list=data;
        
        }
            );
  
    }
    closeClick(){
      this.Activatesubmitacc=false;
       this.refreshaccounts();
    }
    addclick(){
      this.account={
        accountid: 0,
        accountname: "",
        typeofaccount: "",
        emailid: "",
        accountphoneno: "",
        primarycontact: 0,
        jobsdescription: "",
        statustype: "",
        type: "",
        noofbranches: 0,
        branchaddress: "",
        noofemployees: 0,
        accountaddress: "",
        linkedinurl: "",
        companywebsite: "",
        accountowner: "",
        accountstatus: "",
        insertiondate:"",
      }
      this.Activatesubmitacc=true;
    }
    editclick(item:any){
this.account=item;
this.Activatesubmitacc=true;
    }

}
