import { Component,OnInit } from '@angular/core';
import { OppService } from '../Shared/opp.service'; 

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent  implements OnInit {
  constructor(private service:OppService){

  }
  oppList:any=[];
  ActivteOPP:boolean=false;
  opp:any;
  ngOnInit():void{
    this.refreshOppList();

  }

  refreshOppList(){
    this.service.getOppList().subscribe(data=>{
      this.oppList=data;
    })
  }
  addClick(){
    this.opp={
      id:0,
      name:"",
      owner:"",
      workflow:"",
      accname:"",
      amount:"",             
      createfor:"",
      closedate:"",
      prioritytype:"",
      opportunitysource:"",
      description:"",
      sourceofcreation:"",
      product:"",
      units:""

    }
    this.ActivteOPP=true;
  }
  editClick(item:any){
    this.opp=item;
    this.ActivteOPP=true;
  }
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteOpportunity(item.id).subscribe(
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
          this.refreshOppList();
        }

      )
    }
  }
  closeClick(){
    this.ActivteOPP=false;
    this.refreshOppList(); 
  }

}