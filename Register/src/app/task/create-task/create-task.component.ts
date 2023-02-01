import { Component, OnInit } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings!:IDropdownSettings ;
  value!:number;

  userForm!: FormGroup;
  constructor(private route :Router) {}
  ngOnInit(): void {
    this.userForm = new FormGroup({ 
      'Task Category' : new FormControl(null, Validators.required),
      'Select Module' : new FormControl(null, Validators.required),
      'Select Name' : new FormControl(null, Validators.required),
      'Task ID' : new FormControl(null, Validators.required),
      'Title' : new FormControl(null, Validators.required),
      'Description' : new FormControl(null, Validators.required),
      'Priority' : new FormControl(null, Validators.required),
      'Status' : new FormControl(null, Validators.required),
      'Due Date' : new FormControl(null, Validators.required),
      'Due Time' : new FormControl(null, Validators.required),
      'Remainder Date' : new FormControl(null, Validators.required),
      'Remainder Time' : new FormControl(null, Validators.required),
      'Notify' : new FormControl(null, Validators.required),
      'Assign To' : new FormControl(null, Validators.required),  
    });
    this.dropdownList = [
      { item_id: 1, item_text: 'Vinay Velivela', },
      { item_id: 2, item_text: 'Srikanth Kota' },
      { item_id: 3, item_text: 'Khaja Moinuddin' },
      
    ];
    this.selectedItems = [
      { item_id: 2, item_text: 'Srikanth Kota' },
      { item_id: 4, item_text: 'Khaja Moinuddin' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
   
    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }
}
