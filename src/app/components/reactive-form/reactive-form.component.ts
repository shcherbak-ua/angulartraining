import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');

  userForm = new FormGroup({
    email: new FormControl('test@gmail.com'),
    password: new FormControl('',Validators.required),
    gender: new FormControl(''),
  });
 
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.userForm.value);
  }
  get email() {
    return this.userForm.get('email');
 }
 get password() {
  return this.userForm.get('password');
}

  

}
