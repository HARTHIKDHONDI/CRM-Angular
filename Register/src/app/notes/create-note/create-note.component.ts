import { Component,OnInit ,Input} from '@angular/core';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NotesService } from 'src/app/Shared/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings!:IDropdownSettings ;
  value!:number;
    
    
  constructor(private service:NotesService){

  }

  
@Input()
Note:any;
sno!:number;
type: string="";
notify:string ="";
description:string= "";

  ngOnInit(): void 
  {
   this.sno=this.Note.sno;
   this.type=this.Note.type;
   this.notify=this.Note.notify;
   this.description=this.Note.description;


   
    }
    onItemSelect(item: any) {
        console.log(item);}
        onSelectAll(items: any) 
        {
           console.log(items);
          }

  


  
  addNotes(){

    var val={
    sno:this.sno,
    type:this.type,
    notify:this.notify,
    description:this.description,

    }
    this.service.addNotes(val).subscribe(res=>
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
  updateNotes(){
    var val={
      sno:this.sno,
      type:this.type,
      notify:this.notify,
      description:this.description,
  
      }
      this.service.updateNotes(val).subscribe(res=>
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



  
  // onSubmit(data:any)
  // {
  //   this.http.post('https://localhost:7188/api/Notes/Insert',data)
  //   .subscribe((result)=>
  //   {console.warn('result',result)})};