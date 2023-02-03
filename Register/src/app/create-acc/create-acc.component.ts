import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccService } from '../Shared/acc.service';
import{HttpClient}from '@angular/common/http'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent  implements OnInit{

  userForm!: FormGroup;
  constructor(private route :Router,private service:AccService,private http:HttpClient,private datepipe:DatePipe) { 
    
  }
  @Input()
  account:any;
  accountid!:number;
    accountname: string="";
    typeofaccount: string="";
    emailid: string="";
    accountphoneno:number;
    primarycontact:number;
    jobsdescription: string="";
    statustype: string="";
    type: string="";
    noofbranches:number
    branchaddress: string="";
    noofemployees:number;
    accountaddress: string="";
    linkedinurl: string="";
    companywebsite: string="";
    accountowner: string="";
    accountstatus: string="";
    insertiondate:any


   ngOnInit():void {
this.accountid=this.account.accountid;
    this. accountname=this.account.accountname;
    this.typeofaccount=this.account.typeofaccount;
    this.emailid=this.account.emailid;
    this.accountphoneno= this.account.accountphoneno,
    this.primarycontact= this.account.primarycontact,
    this.jobsdescription= this.account.jobsdescription,
    this.statustype= this.account.statustype,
    this.type= this.account.type,
    this.noofbranches=this.account.noofbranches, 
    this.branchaddress=this.account.branchaddress, 
    this.noofemployees=this.account.noofemployees, 
    this.accountaddress= this.account.accountaddress,
    this.linkedinurl= this.account.linkedinurl,
    this.companywebsite= this.account.companywebsite,
    this.accountowner= this.account.accountowner,
    this.accountstatus= this.account.accountstatus
    this.insertiondate=this.datepipe.transform(this.account.insertiondate,'yyyy-MM-dd') 
    this.userForm = new FormGroup({
     
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      
      
      'NoOfEmployees' : new FormControl(null, Validators.required),
      'CompanyWebsite' : new FormControl(null, Validators.required),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          
          Validators.minLength(10)

        ]),
      'AccountPhoneNumber' : new FormControl(null, Validators.required),
      'StatusType' : new FormControl(null, Validators.required),
      'AccountID' : new FormControl(null, Validators.required),

      'AccountAddress' : new FormControl(null, Validators.required),
      'JobDescription' : new FormControl(null, Validators.required),
      'AccountName' : new FormControl(null, Validators.required),
      'NoOfBranches' : new FormControl(null, Validators.required),
      'LinkedInUrl': new FormControl(null, Validators.required),
      'AddressDetails':new FormControl(null,Validators.required),
      'Accountstatus':new FormControl(null,Validators.required),
     
  });
    }
   
   
 



    updateaccounts(){
      var value={
        accountid:this.accountid,
        accountname:this.accountname,
  typeofaccount:this.typeofaccount,
  emailid:this.emailid,
  accountphoneno: this.accountphoneno,
  primarycontact: this.primarycontact,
  jobsdescription: this.jobsdescription,
  statustype: this.statustype,
  type: this.type,
  noofbranches:this.noofbranches, 
  branchaddress:this.branchaddress, 
  noofemployees:this.noofemployees, 
  accountaddress: this.accountaddress,
  linkedinurl: this.linkedinurl,
  companywebsite: this.companywebsite,
  accountowner: this.accountowner,
  accountstatus: this.accountstatus,
   insertiondate:this.insertiondate
      }
      this.service.updateaccount(value).subscribe(res=>{
        var closeModelBtn= document.getElementById('add-edit-model-close');
         if(closeModelBtn){
          closeModelBtn.click();
        }
        var showAddSuccess=document.getElementById('update-success-alert');
         if(showAddSuccess){
           showAddSuccess.style.display="block";
         }
         setTimeout(function(){
         if(showAddSuccess){
            showAddSuccess.style.display="none"
            }
            },4000);
      })
    }
    addaccounts(){

      var value={
        accountid:this.accountid,
        accountname:this.accountname,
  typeofaccount:this.typeofaccount,
  emailid:this.emailid,
  accountphoneno: this.accountphoneno,
  primarycontact: this.primarycontact,
  jobsdescription: this.jobsdescription,
  statustype: this.statustype,
  type: this.type,
  noofbranches:this.noofbranches, 
  branchaddress:this.branchaddress, 
  noofemployees:this.noofemployees, 
  accountaddress: this.accountaddress,
  linkedinurl: this.linkedinurl,
  companywebsite: this.companywebsite,
  accountowner: this.accountowner,
  accountstatus: this.accountstatus,
  insertiondate:this.insertiondate
      }
      this.service.insert(value).subscribe(res=>
        {
          var closeModelBtn= document.getElementById('add-edit-model-close');
          if(closeModelBtn){
            closeModelBtn.click();
          }
          var showAddSuccess=document.getElementById('add-success-alert');
          if(showAddSuccess){
            showAddSuccess.style.display="block";
          } 
          setTimeout(function(){
            if(showAddSuccess){
              showAddSuccess.style.display="none"
            }
          },4000);
  });
}
  }