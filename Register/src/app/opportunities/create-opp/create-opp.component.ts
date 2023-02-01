import { Component,Input,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { OppService } from 'src/app/Shared/opp.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-opp',
  templateUrl: './create-opp.component.html',
  styleUrls: ['./create-opp.component.css']
})
export class CreateOppComponent  implements OnInit {
  userForm!: FormGroup;
  constructor(private route :Router,private service:OppService,private datepipe:DatePipe){
    
   }
   
   @Input() opp:any;
      id!:number;
      name:string="";
     owner:string="";
     workflow:string="";
      accname:string="";
      amount!:number;                         
      createfor:string="";
      closedate:any;
      prioritytype:string="";
      opportunitysource:string="";
      description:string="";
      sourceofcreation:string="";
      product:string="";
      units:string="";

   
  
  ngOnInit(): void {
    this.id=this.opp.id;
    this.name=this.opp.name;
    this.owner=this.opp.owner;
    this.amount=this.opp.amount;
    this.workflow=this.opp.workflow;
    this.accname=this.opp.accname;
    this.createfor=this.opp.createfor;
    
    this.closedate=this.datepipe.transform(this.opp.closedate,'yyyy-MM-dd');
    this.prioritytype=this.opp.prioritytype;
    this.opportunitysource=this.opp.opportunitysource;
    this.description=this.opp.description;
    this.sourceofcreation=this.opp.sourceofcreation;
    this.product=this.opp.product;
    this.units=this.opp.units;
    this.userForm = new FormGroup({
      
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      
      
      'NoOfEmployees' : new FormControl(null, Validators.required),
      'Company Website' : new FormControl(null, Validators.required),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          //Validators.pattern('^\+(?:[0-9]?){6,14}[0-9]$'),
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (](\\d{3})[-. )](\\d{3})[-. ](\\d{4})(?: *x(\\d+))?\\s$'),
          Validators.minLength(10)
  
        ]),
      'Opportunity ID' : new FormControl(null, Validators.required),
      'Opportunity Name' : new FormControl(null, Validators.required),
      'Oppertunity Owner' : new FormControl(null, Validators.required),
      'Oppertunity amount': new FormControl(null,Validators.required),
      'Oppertunity Workflow' : new FormControl(null, Validators.required),
      'Account Name' : new FormControl(null, Validators.required),
      'Create For' : new FormControl(null, Validators.required),
      'Opportunity Amount' : new FormControl(null, Validators.required),
      'Expected Close Date' : new FormControl(null, Validators.required),
      'Priority Type' : new FormControl(null, Validators.required),
      'Opportunity Source' : new FormControl(null, Validators.required),
      'Actual End Date' : new FormControl(null, Validators.required),
      'Description' : new FormControl(null, Validators.required),
      'Source Of Creation' : new FormControl(null, Validators.required),
      'Product/Service' : new FormControl(null, Validators.required),
      'Units' : new FormControl(null, Validators.required)
      
      
      
  });
  
  }
  addOpp(){
    var val={
    id:this.id,
    name:this.name,
    owner:this.owner,
    amount:this.amount,
    workflow:this.workflow,
    accname:this.accname,
    createfor:this.createfor,
    closedate:this.closedate,
    prioritytype:this.prioritytype,
    opportunitysource:this.opportunitysource,
    description:this.description,
    sourceofcreation:this.sourceofcreation,
    product:this.product,
    units:this.units
    };
    this.service.addOpportunity(val).subscribe(res=>
      {
        var closeModelBtn= document.getElementById('create-opp-model-close');
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
  updateOpp(){
    var val={
      id:this.id,
      name:this.name,
      owner:this.owner,
      amount:this.amount,
      workflow:this.workflow,
      accname:this.accname,
      createfor:this.createfor,
      closedate:this.closedate,
      prioritytype:this.prioritytype,
      opportunitysource:this.opportunitysource,
      description:this.description,
      sourceofcreation:this.sourceofcreation,
      product:this.product,
      units:this.units
      };
      this.service.updateOpportunity(val).subscribe(res=>
        {
          var closeModelBtn= document.getElementById('create-opp-model-close');
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