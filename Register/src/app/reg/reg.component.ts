import { Component ,OnInit,Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegService } from '../Shared/reg.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent  {
  title = 'employee';
  
  registerList:any=[];
  ActivateAddEditreg:boolean=false;
  reg:any;
  constructor(private _apiservice:RegService){}

  ngOnInit():void{
   this.refreshRegList();
  }
  refreshRegList(){
    this._apiservice.getRegister().subscribe(data=>{
      this.registerList=data;
    })
  }

  addClick(){
    this.reg={
      recordid: 0,
      prefix: "",
      suffix: 0,
      firstName: "",
      lastName: "",
      dob: "",
      emailId: "",
      mobile: 0,
      gender: "",
      address: "",
      designation: "",
      typeofwork: "",
      picture: "",
      doj: "",
      password: "",
      status: 0,
    
    }
    this.ActivateAddEditreg=true;
  }

  editClick(item:any){
    this.reg=item;
    this.ActivateAddEditreg=true;
    
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this._apiservice.deleteRegister(item.recordid).subscribe(
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
          this.refreshRegList();
        }

      )
    }
  }
  closeClick(){
    this.ActivateAddEditreg=false;
    this.refreshRegList(); 
  }
}