import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:number;
  // validation:string;
  
  users:user[];
  u:any={};
  url:string='http://localhost:3000/user';

  userFunc(username,password):boolean{
    var status=false;
    for(let u of this.users){
      if(u.username==this.username && u.password == this.password){
        status=true;
        break;
      }
    }
    return status;
  }



  constructor(private http:HttpClient) { 
    this.http.get<user[]>(this.url).subscribe(y => this.users=y);
  }

  Submit(){
    if(this.userFunc(this.username,this.password))
        alert("Login Credentials are wright");
     else
        alert("Login Credentials are wrong, Pls Check once...."); 
}
  

  ngOnInit() {
    // alert("Login Credentials are wright,then it opens");
  }

}

class user{
  username:string;
  password:number;
}
