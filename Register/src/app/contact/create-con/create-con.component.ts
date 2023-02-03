import { DatePipe } from '@angular/common';
import { Component, OnInit ,Input} from '@angular/core';
import { ContactService } from 'src/app/Shared/contact.service';

@Component({
  selector: 'app-create-con',
  templateUrl: './create-con.component.html',
  styleUrls: ['./create-con.component.css']
})
export class CreateConComponent implements OnInit{

  constructor(private service:ContactService,private datepipe:DatePipe) {
    
   }
   @Input()
   con:any;
   recordid !:number;
    accountname:string="";
    personname :string="";
    emailid:string="";
    mobile !:number;
    designation :string="";
    workexperiance !:number;
    contactsource :string="";
   contacttype:string="";
   linkedinurl :string="";
   dateofcontacted !:any;
   remarks :string="";


  
  ngOnInit(): void {
    this.recordid=this.con.recordid; 
    this.accountname=this.con.accountname;
    this.personname=this.con.personname; 
     this.emailid=this.con.emailid;
    this.mobile=this.con.mobile;
     this.designation=this.con.designation;
    this.workexperiance=this.con.workexperiance;
     this.contactsource=this.con.contactsource;
    this.contacttype=this.con.contacttype;
     this.linkedinurl=this.con.linkedinurl;
     this.dateofcontacted=this.datepipe.transform(this.con.dateofcontacted,'yyyy-MM-dd');
    this.remarks=this.con.remarks;


}


addcontact(){
  var val={
    recordid:this.recordid,
    accountname:this.accountname,
    personname:this.personname,
    emailid:this.emailid,
    mobile:this.mobile,
    designation:this.designation,
    workexperiance:this.workexperiance,
    contactsource:this.contactsource,
    contacttype:this.contacttype,
    linkedinurl:this.linkedinurl, 
    dateofcontacted: this.dateofcontacted,
    remarks:this.remarks
   };
   this.service.addcontacts(val).subscribe(res=>
     { 
       var closeModelBtn= document.getElementById('add-edit-model-close');
       if(closeModelBtn){closeModelBtn.click();
       }
       var showAddSuccess=document.getElementById('add-success-alert');
        if(showAddSuccess){showAddSuccess.style.display="block"; 
       }
      setTimeout(function(){
          if(showAddSuccess)
         {
            showAddSuccess.style.display="none" 
           } 
         },4000);});
}
updateContact(){
  var val={
    recordid:this.recordid,
    accountname:this.accountname,
    personname:this.personname,
    emailid:this.emailid,
    mobile:this.mobile,
    designation:this.designation,
    workexperiance:this.workexperiance,
    contactsource:this.contactsource,
    contacttype:this.contacttype,
    linkedinurl:this.linkedinurl, 
    dateofcontacted: this.dateofcontacted,
    remarks:this.remarks
   };
   this.service.updatecontacts(val).subscribe(res=>
     { 
       var closeModelBtn= document.getElementById('add-edit-model-close');
       if(closeModelBtn){closeModelBtn.click();
       }
       var showAddSuccess=document.getElementById('update-success-alert');
        if(showAddSuccess){showAddSuccess.style.display="block"; 
       }
      setTimeout(function(){
          if(showAddSuccess)
         {
            showAddSuccess.style.display="none" 
           } 
         },4000);});
}
}
