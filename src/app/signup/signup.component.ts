import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  details = {
    mail: "",
    pass: ""
  };
  ngOnInit(): void {
  }
  onClickSubmit() {
    alert("Sign up successful for\nEmail: "+this.details.mail);
  }
}
