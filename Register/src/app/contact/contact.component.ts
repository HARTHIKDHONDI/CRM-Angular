import { Component ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../Shared/contact.service'; 
import{HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  Contactlist:any=[];
  ActivateAddEditCon:boolean=false;
  con:any;
  constructor(private _freeApiservice:ContactService)
  {
  }
 
  

  ngOnInit():void
  {

this.refreshconlist();

}
refreshconlist(){
  this._freeApiservice.get().subscribe(data=>{
    this.Contactlist=data;
  })
}
addClick(){
  this.con={
    recordid :0 ,
    accountid :0,
    personname :"",
    emailid:"",
    mobile :0,
    designation :"",
    workexperiance :0,
    contactsource :"",
    contacttype:"",
    linkedinurl :"",
    dateofcontacted :"",
    remarks :""
  }
  this.ActivateAddEditCon=true;
}
editClick(item:any){
  this.con=item;
  this.ActivateAddEditCon=true;
  
}

deleteClick(item:any){
  if(confirm('Are you sure??')){
    this._freeApiservice.deletecontacts(item.id).subscribe(
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
        this.refreshconlist();
      }

    )
  }
}
closeClick(){
  this.ActivateAddEditCon=false;
  this.refreshconlist(); 
}

}
