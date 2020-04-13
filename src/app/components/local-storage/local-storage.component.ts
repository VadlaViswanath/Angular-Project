
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor() { }

  user={};
  users=[];
  
   arrayData2=[];
  submit(){
    this.users.push(this.user);
    alert(this.users.length);
    // localStorage.setItem('myData',JSON.stringify(this.users));
    sessionStorage.setItem('myData',JSON.stringify(this.users));
    this.user={};
  }

deleteData(){
  //localStorage.removeItem('myData');
  sessionStorage.removeItem('myData');
}

  getData(){
    // let arrayData=localStorage.getItem("myData");
     let arrayData=sessionStorage.getItem("myData");
    this.arrayData2=JSON.parse(arrayData);
    // console.log(this.arrayData);
    // console.log(typeof this.arrayData);
  }
  ngOnInit() {
  }

}

