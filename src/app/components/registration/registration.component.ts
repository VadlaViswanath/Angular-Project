import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  formUrl:string='http://localhost:3000/registration';

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  // , private toastr:ToastrService
  
  registrationForm= this.fb.group({
    userName:['',Validators.required],
    Email:[''],
    mobile:[''],
    passwords:this.fb.group({
      password:['',[Validators.required,Validators.minLength(4)]],
      confirmPassword:['',Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('confirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }


  onSubmit(){
      this.http.post(this.formUrl,this.registrationForm.value).subscribe(
        () => {

          alert('data added successfully')
      //     if (res.succeeded) {
      //       this.registrationForm.reset();
      //       this.toastr.success('New user created!', 'Registration successful.');
      //     } else {
      //       res.errors.forEach(element => {
      //         switch (element.code) {
      //           case 'DuplicateUserName':
      //             this.toastr.error('Username is already taken','Registration failed.');
      //             break;
  
      //           default:
      //           this.toastr.error(element.description,'Registration failed.');
      //             break;
      //         }
      //       });
      //     }
      //   },
      //   err => {
      //     console.log(err);
         }
     
       )
  }


  ngOnInit() {
  }

}
