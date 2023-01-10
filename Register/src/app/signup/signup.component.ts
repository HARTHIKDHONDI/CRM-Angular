import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{ 

  userForm!: FormGroup;
  constructor(private route :Router) { }

   ngOnInit() {

    this.userForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'firstname' : new FormControl(null, Validators.required),
      'fullname' : new FormControl(null, Validators.required),
      'lastname' : new FormControl(null, Validators.required),
      'date' : new FormControl(null, Validators.required),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          //Validators.pattern('^\+(?:[0-9]?){6,14}[0-9]$'),
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
          Validators.minLength(10)

        ]),
      'gender' : new FormControl(null, Validators.required),
      'role' : new FormControl(null, Validators.required),

      'city' : new FormControl(null, Validators.required),
      'mandal' : new FormControl(null, Validators.required),
      'Doorno' : new FormControl(null, Validators.required),
      'street' : new FormControl(null, Validators.required),
      'Confrimpassword' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
      'dateofjoin': new FormControl(null, Validators.required),
     
  });
    }
    Onclick():void{
      console.log("reg");
      this.route.navigateByUrl('./Home');
      
    }
    //  goToPage(pageName:string){
    //   this.route.navigate([`${pageName}`]);
    // }
}