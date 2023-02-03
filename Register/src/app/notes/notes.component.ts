import { Component } from '@angular/core';
import { NotesService } from '../Shared/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newdata:any=[];
  ActivateAddEditNote=false;
  Note:any;
  constructor(private _apiservice:NotesService){}
   ngOnInit(){
  //  { this._apiservice.getdata().subscribe(res=>{
  //    this.newdata=res;
  //  });
  this.refreshNoteList();
 }
 refreshNoteList(){
  this._apiservice.getdata().subscribe(data=>{
    this.newdata=data;
  })
    }

 closeClick(){
this.ActivateAddEditNote=false;
this.refreshNoteList();
 }
 addClick(){
  this.Note={
    sno:0,
    type: "",
    notify: "",
    description: ""
  }
  this.ActivateAddEditNote=true;

  }
  editClick(item:any){
    this.Note=item;
    this.ActivateAddEditNote=true;
    
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this._apiservice.deleteNotes(item.sno).subscribe(
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
          this.refreshNoteList();
        }

)
}
}

 }
