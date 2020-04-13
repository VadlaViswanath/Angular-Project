import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder,private _hserve:HttpClient){}

//   userForm = this.fb.group({
//     firstname:['',Validators.required],
//     lastname:[''],
//     age:[''],
//     email:[''],
//     address:this.fb.group({
//       address1:['',Validators.required],
//       state:[''],
//       zip:['']
//     })
//   })


// onSubmit(){
//   console.log(this.userForm.value);
//   // console.log(this.userForm.controls['firstname'].value);

// // var firstname=this.userForm.get('firstname').value;
//   // console.log(firstname);
//   console.log(this.userForm.get('lastname').value);
// console.log(this.userForm.get(['address','address1']).value);
// }

// ====================

_url:string='http://localhost:3000/users';



registerForm=new FormGroup({
  fullName:new FormControl('visu'),
  password:new FormControl(''),
  email:new FormControl(''),
  mobile:new FormControl(''),
  address:new FormGroup({
    city:new FormControl(''),
    state:new FormControl(''),
    postalCode:new FormControl('')
  })

});

  ngOnInit() {
  }

  submit(){
    this._hserve.post(this._url,this.registerForm.value).subscribe((res)=>console.log(res));
  }








}
