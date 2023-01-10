import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  userForm!: FormGroup;
  
  

   ngOnInit() {

    this.userForm = new FormGroup({
     
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      
      'password' : new FormControl(null, Validators.required),
      
     
  });
  
    }

}
