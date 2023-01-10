
import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  implements OnInit{ 

  userForm!: FormGroup;
 

  

   ngOnInit() {

    this.userForm = new FormGroup({
     
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      
      'password' : new FormControl(null, Validators.required),
      
     
  });
  
    }
}