import { Component } from '@angular/core';
import { LeadService } from '../Shared/lead.service';
  import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent {
  newdata:any=[];
  ActivateAddEditLead:boolean=false;
  lead:any;
  constructor(private _apiservice:LeadService,private datepipe:DatePipe){}
   ngOnInit()
   { 
    this.refreashlead();
   
}
refreashlead(){
  this._apiservice.GetAllData().subscribe(data=>{
    this.newdata=data;
})
}
addClick(){
this.lead={
  leadid:0,
  leadname:"",
  emailid:"",
  phoneno:"",
  designation:"",
  workexperiance:0,
  leadsource:"",
  linkedinurl:"",
  leadrating:0,
  dateofcontacted:"",
  remarks:"",
  leadstatus:0
}
this.ActivateAddEditLead=true;
}
editClick(item:any){
  this.lead=item;
  this.ActivateAddEditLead=true;
  
}

deleteClick(item:any){
  if(confirm('Are you sure??')){
    this._apiservice.deletelead(item.leadid).subscribe(
      data=>{
        var closeModelBtn= document.getElementById('add-edit-model-close');
      if(closeModelBtn){
        closeModelBtn.click();
      }
      var showAddSuccess=document.getElementById('delete-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display="block";
      } 
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none"
        }
      },4000);
        this.refreashlead();
      }

    )
  }
}
closeClick(){
  this.ActivateAddEditLead=false;
  this.refreashlead(); 

}
}
