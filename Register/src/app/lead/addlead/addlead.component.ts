import { Component,Input,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { LeadService } from 'src/app/Shared/lead.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addlead',
  templateUrl: './addlead.component.html',
  styleUrls: ['./addlead.component.css']
})
export class AddleadComponent implements OnInit{

  userForm!: FormGroup;
  constructor(private service:LeadService,private datepipe:DatePipe){
 
  }
  @Input()
  lead:any;
  leadid!:number;
   leadname:string="";
   emailid:string="";
   phoneno:string="";
   designation:string="";
   workexperiance!:number;
   leadsource:string="";
   linkedinurl:string="";
   leadrating:string="";
   dateofcontacted:any;
   remarks:string="";
   leadstatus!:number;
 //  onSubmit(data:any)
 //  {
 //    this.http.post('https://localhost:7046/api/Lead/AddLead',data)
 //    .subscribe((result)=>
 //    {console.warn('result',result)})};
 
 ngOnInit():void{
   
   this.leadid=this.lead.leadid;
    this.leadname=this.lead.leadname;
    this.emailid=this.lead.emailid;
    this.phoneno=this.lead.phoneno;
    this.designation=this.lead.designation;
    this.workexperiance=this.lead.workexperiance;
    this.leadsource=this.lead.leadsource;
    this.linkedinurl=this.lead.linkedinurl;
    this.leadrating=this.lead.leadrating;
    this.dateofcontacted=this.datepipe.transform(this.lead.dateofcontacted,'yyyy-MM-dd');
    this.remarks=this.lead.remarks;
    this.leadstatus=  this.lead.leadstatus; 
   
 // this.userForm = new FormGroup({
 //  'leadname' : new FormControl(null, Validators.required),
 // 'Emailid' : new FormControl(null, [Validators.required, Validators.email]),
 
 //  'Designation' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
 //  'Work Experiance' : new FormControl(null, Validators.required),
 // 'Lead source' : new FormControl(null, Validators.required),
 //        'Lead rating' : new FormControl(null, Validators.required),
 // 'Linkedinurl' : new FormControl(null, Validators.required),
 // 'date ofcontacted' : new FormControl(null, Validators.required),
 // 'Phone no' : new FormControl(
 //  null,
 //  [
 //  Validators.required,
 // //Validators.pattern('^\+(?:[0-9]?){6,14}[0-9]$'),
 // Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (](\\d{3})[-. )](\\d{3})[-. ](\\d{4})(?: *x(\\d+))?\\s$'),
 // Validators.minLength(10)
 
 // ]),
 // 'gender' : new FormControl(null, Validators.required),
 // 'role' : new FormControl(null, Validators.required),
 
 // 'city' : new FormControl(null, Validators.required),
 // 'mandal' : new FormControl(null, Validators.required),
 // 'Doorno' : new FormControl(null, Validators.required),
 // 'street' : new FormControl(null, Validators.required),
 // 'Confrimpassword' : new FormControl(null, Validators.required),
 // 'password' : new FormControl(null, Validators.required),
 // 'dateofjoin': new FormControl(null, Validators.required),
 
 // });
 
 
 
 }
 addleads(){
   var val={
     leadid:this.leadid,
    leadname:this.leadname,
    emailid:this.emailid,
    phoneno:this.phoneno,
    designation:this.designation,
     workexperiance:this.workexperiance,
    leadsource:this.leadsource,
    linkedinurl:this.linkedinurl,
     leadrating:this.leadrating,
    dateofcontacted:this.dateofcontacted,
   remarks:this.remarks,
   leadstatus:this.leadstatus
 };
 this.service.addLead(val).subscribe(res=>
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
 updateleads(){
   var val={
     leadid:this.leadid,
        leadname:this.leadname,
        emailid:this.emailid,
        phoneno:this.phoneno,
        designation:this.designation,
      workexperiance:this.workexperiance,
        leadsource:this.leadsource,
        linkedinurl:this.linkedinurl,
     leadrating:this.leadrating,
        dateofcontacted:this.dateofcontacted,
       remarks:this.remarks,
       leadstatus:this.leadstatus
     };
     this.service.updatelead(val).subscribe(res=>
       {
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
     });
 }
 }