import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegService } from 'src/app/Shared/reg.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-edit-reg',
  templateUrl: './add-edit-reg.component.html',
  styleUrls: ['./add-edit-reg.component.css']
})
export class AddEditRegComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private Service:RegService,private datepipe:DatePipe) { }
  @Input()
  reg:any;
  recordid!: number;
    employeeId: string="";
    prefix: string="";
    suffix!: number;
    firstName: string="";
    lastName: string="";
    dob: any;
    emailId: string="";
    mobile!: number;
    gender: string="";
    address: string="";
    designation: string="";
    typeofwork: string="";
    picture: string="";
    doj: any;
    password: string="";
    status: number;
    
   ngOnInit():void {
    this.recordid=this.reg.recordid;
    this.employeeId=this.reg.employeeId;
    this.prefix=this.reg.prefix;
    this.suffix=this.reg.suffix;
    this.firstName=this.reg.firstName;
    this.lastName=this.reg.lastName;
    this.dob=this.datepipe.transform(this.reg.dob,'yyyy-MM-dd');
    this.emailId=this.reg.emailId;
    this.mobile=this.reg.mobile;
    this.gender=this.reg.gender;
    this.address=this.reg.address;
    this.designation=this.reg.designation;
    this.typeofwork=this.reg.typeofwork;
    this.picture=this.reg.picture;
    this.doj=this.datepipe.transform(this.reg.doj,'yyyy-MM-dd');
    this.password=this.reg.password;
    this.status=this.reg.status;
    
    

    

  //   this.userForm = new FormGroup({
  //     'name' : new FormControl(null, Validators.required),
  //     'email' : new FormControl(null, [Validators.required, Validators.email]),
      
  //     'message' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
  //     'firstname' : new FormControl(null, Validators.required),
  //     'fullname' : new FormControl(null, Validators.required),
  //     'lastname' : new FormControl(null, Validators.required),
  //     'date' : new FormControl(null, Validators.required),
  //     'phone' : new FormControl(
  //       null,
  //       [
  //         Validators.required,
  //         Validators.pattern('^\+(?:[0-9]?){6,14}[0-9]$'),
  //        // Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (](\\d{3})[-. )](\\d{3})[-. ](\\d{4})(?: *x(\\d+))?\\s$'),
  //         Validators.minLength(10)

  //       ]),
  //     'gender' : new FormControl(null, Validators.required),
  //     'role' : new FormControl(null, Validators.required),

  //     'city' : new FormControl(null, Validators.required),
  //     'mandal' : new FormControl(null, Validators.required),
  //     'Doorno' : new FormControl(null, Validators.required),
  //     'street' : new FormControl(null, Validators.required),
  //     'Confrimpassword' : new FormControl(null, Validators.required),
  //     'password' : new FormControl(null, Validators.required),
  //     'dateofjoin': new FormControl(null, Validators.required),
     
  // });
    }

    addRegister(){
      var val={
        recordid:this.recordid,
        employeeId:this.employeeId,
        prefix:this.prefix,
        suffix:this.suffix,
        firstName:this.firstName,
        lastName:this.lastName,
        dob:this.dob,
        emailId:this.emailId,
        mobile:this.mobile,
        gender:this.gender,
        address:this.address,
       designation:this.designation,
        typeofwork:this.typeofwork,
       picture:this.picture,
        doj:this.doj,
        password:this.password,
        status:this.status,
        
      };
      this.Service.insertRegister(val).subscribe(res=>
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
    updateRegister(){
      var val={
        recordid:this.recordid,
        employeeId:this.employeeId,
        prefix:this.prefix,
        suffix:this.suffix,
        firstName:this.firstName,
        lastName:this.lastName,
        dob:this.dob,
        emailId:this.emailId,
        mobile:this.mobile,
        gender:this.gender,
        address:this.address,
       designation:this.designation,
        typeofwork:this.typeofwork,
       picture:this.picture,
        doj:this.doj,
        password:this.password,
        status:this.status,
      
      };
      this.Service.updateRegister(val).subscribe(res=>
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