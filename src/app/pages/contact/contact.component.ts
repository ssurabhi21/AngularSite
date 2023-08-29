// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
  

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  registerForm:any= FormGroup;

  username: string = "";
  email: string = "";
  contactno: any = "";
  feedback: any = "";
 
  constructor(private Router: Router) {

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      contactno: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      feedback: new FormControl("", [Validators.required, Validators.maxLength(20)]),
     })
    }
    onSubmit() {
      localStorage.setItem("username", this.username)!;
      localStorage.setItem("email", this.email)!;
        localStorage.setItem("contactno", this.contactno)!;
        localStorage.setItem("feedback", this.feedback)!;
        this.registerForm.reset();
        alert("Your response has been submitted");
        this.Router.navigate(['feedback']);
      }



}

