import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private route :Router) {
    
   }

  
  ngOnInit(): void {
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
      'AccountPhoneNumber' : new FormControl(null, Validators.required),
      'StatusType' : new FormControl(null, Validators.required),
      'AccountDetails' : new FormControl(null, Validators.required),
      'AccountAddress' : new FormControl(null, Validators.required),
      'JobDescription' : new FormControl(null, Validators.required),
      'AccountName' : new FormControl(null, Validators.required),
      'NoOfBranches' : new FormControl(null, Validators.required),
      'AccountID' : new FormControl(null, Validators.required),
      'LinkedIn Url' : new FormControl(null, Validators.required),
      'Primary Contact' : new FormControl(null, Validators.required),
      
      
  });
  

  
  }
  
 
  
  
}
