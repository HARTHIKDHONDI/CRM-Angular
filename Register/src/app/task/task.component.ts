import { Component, OnInit } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TaskService } from '../Shared/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  
  constructor(private service:TaskService){

  }
  taskList:any=[];
  ActivateAddEditTask:boolean=false;
  task:any;
  ngOnInit():void{
  this.refreshtaskList();
  }
  refreshtaskList()
  {
    this.service.GetAllData().subscribe(data=>{
      this.taskList=data;
    })
  }
  addClick()
  {
    this.task=
    {
        taskCategory: "",
        selectModule: "",
        selectName: "",
        taskID: 0,
        title: "",
        description: "",
        priority: "",
        status: "",
        dueDate: "",
        dueTime: "",
        reminderDate: "",
        reminderTime: "",
        notify: "",
        assignTo: ""
      }
      this.ActivateAddEditTask=true;
  }

  editClick(item:any){
    this.task=item;
    this.ActivateAddEditTask=true;
    
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletetask(item.taskID).subscribe(
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
          this.refreshtaskList();
        }

      )
    }
  }
  
  closeClick(){
    this.ActivateAddEditTask=false;
    this.refreshtaskList();
  }
}