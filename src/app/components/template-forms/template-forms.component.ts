import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  employe:Employee[];
  y:any={};
  url:string='http://localhost:3000/employees';

  
  constructor(private http:HttpClient, private _router: Router) {

     //this.http.get<Employee[]>(this.url).subscribe(x => this.employe=x);
    this.http.get<Employee[]>(this.url).subscribe((x) => {
this.employe = x;
    }, (err) => {
console.log(err)
    }, () => {
this._router.navigate['login'];
    }
);
  }

  addRow(){
    this.http.post(this.url,this.y,{headers:new HttpHeaders({"content-type":"application/json"})}).subscribe(()=>alert("Row added successfully"));
    console.log(this.y);
  }

  searchRowById(id:number){
    this.http.get(`${this.url}/${id}`).subscribe(x =>this.y=x);
  }

  updateRow(id:number){
    this.http.put(`${this.url}/${id}`,this.y,{headers:new HttpHeaders({"content-type":"application/json"})}).subscribe(()=>alert("Row updated Successfully"));
  }

  deleteRow(id:number){
    this.http.delete(`${this.url}/${id}`).subscribe(x => this.y=x);
  }


  ngOnInit() {
  }

}

class Employee{
  id:number;
  name:string;
  job:string;
  salary:string;
}
