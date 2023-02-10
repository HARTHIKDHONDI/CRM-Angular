import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { TaskService } from 'src/app/Shared/task.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  userForm!: FormGroup;
  constructor(private route :Router,private service:TaskService,private datepipe:DatePipe) {}
  @Input()
  task:any;
  taskCategory: string="";
  selectModule:string= "";
  selectName:string= "";
  taskID!: number;
  title: string="";
  description: string="";
  priority: string="";
  status: string="";
  dueDate: any;
  dueTime:any;
  reminderDate: any;
  reminderTime: any;
  notify:string="";
  assignTo:string= "";
  
  ngOnInit(): void {
    this.taskCategory=this.task.taskCategory;
    this.selectModule=this.task.selectModule;
    this.selectName=this.task.selectName;
    this.taskID=this.task.taskID;
    this. title=this.task.title;
    this.description=this.task.description ;
    this. priority=this.task.priority;
    this.status =this.task.status;
    this.dueDate=this.datepipe.transform(this.task.dueDate,'yyyy-MM-dd');
    this. dueTime=this.task.dueTime
    this. reminderDate=this.datepipe.transform(this.task.reminderDate,'yyyy-MM-dd');
    this.reminderTime=this.task.reminderTime
    this. notify=this.task.notify;
    this.assignTo =this.task.assignTo;

// this.userForm = new FormGroup({ 
//       'Task Category' : new FormControl(null, Validators.required),
//       'Select Module' : new FormControl(null, Validators.required),
//       'Select Name' : new FormControl(null, Validators.required),
//       'Task ID' : new FormControl(null, Validators.required),
//       'Title' : new FormControl(null, Validators.required),
//       'Description' : new FormControl(null, Validators.required),
//       'Priority' : new FormControl(null, Validators.required),
//       'Status' : new FormControl(null, Validators.required),
//       'Due Date' : new FormControl(null, Validators.required),
//       'Due Time' : new FormControl(null, Validators.required),
//       'Remainder Date' : new FormControl(null, Validators.required),
//       'Remainder Time' : new FormControl(null, Validators.required),
//       'Notify' : new FormControl(null, Validators.required),
//       'Assign To' : new FormControl(null, Validators.required),  
//     });
  //   this.dropdownList = [
  //     { item_id: 1, item_text: 'Vinay Velivela', },
  //     { item_id: 2, item_text: 'Srikanth Kota' },
  //     { item_id: 3, item_text: 'Khaja Moinuddin' },
      
  //   ];
  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'UnSelect All',
  //     //itemsShowLimit: 3,
  //     allowSearchFilter: true
  //   };
  //   this.dropdownList1 = [
  //     { item_id: 1, item_text: 'Vinay Velivela', },
  //     { item_id: 2, item_text: 'Srikanth Kota' },
  //     { item_id: 3, item_text: 'Khaja Moinuddin' },
      
  //   ];

  //   this.dropdownSettings1 = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'UnSelect All',
  //     // itemsShowLimit: 3,
  //     allowSearchFilter: true
  //   };
  // }
   
  //   onItemSelect(item: any) {
  //     console.log(item);
  //   }
  //   onSelectAll(items: any) {
  //     console.log(items);
  }
  addtasks()
  {
    var val={
    taskCategory:this.taskCategory,
    selectModule:this.selectModule,
    selectName:this.selectName,
    taskID: this.taskID,
    title: this.title,
    description: this.description,
    priority: this.priority,
    status: this.status,
    dueDate: this.dueDate,
    dueTime:this.dueTime,
    reminderDate: this.reminderDate,
    reminderTime: this.reminderTime,
    notify:this.notify,
    assignTo:this.assignTo
    };
    this.service.addtask(val).subscribe(res=>
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
updatetasks()
  {
    var val={
    taskCategory:this.taskCategory,
    selectModule:this.selectModule,
    selectName:this.selectName,
    taskID: this.taskID,
    title: this.title,
    description: this.description,
    priority: this.priority,
    status: this.status,
    dueDate: this.dueDate,
    dueTime:this.dueTime,
    reminderDate: this.reminderDate,
    reminderTime: this.reminderTime,
    notify:this.notify,
    assignTo:this.assignTo
    };
    this.service.updatetask(val).subscribe(res=>
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