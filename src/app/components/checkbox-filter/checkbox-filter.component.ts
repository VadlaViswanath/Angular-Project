import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  constructor() { }
  all:boolean=true;
  deleted:boolean=true;
  accepted:boolean=true;
  proposed:boolean=true;
  existing:boolean=true;

  arrayDataTemp=[];


  changeData2(){
  this.arrayDataTemp=[];

  if(this.all){
    this.deleted=true;
  this.accepted=true;
  this.proposed=true;
  this.existing=true;
  this.arrayDataTemp = this.arrayData;
  } else {
    this.deleted=false;
  this.accepted=false;
  this.proposed=false;
  this.existing=false;
    // this.changeData();
  }
}
  
   
  changeData(){
    this.arrayDataTemp=[];
    this.all=false;
    
    for(let data of this.arrayData){
      if(this.deleted && data.status == "deleted"){
        this.arrayDataTemp.push(data);
      }
      if(this.accepted && data.status == "accepted"){
        this.arrayDataTemp.push(data);
      }
      if(this.proposed && data.status == "proposed"){
        this.arrayDataTemp.push(data);
      }
      if(this.existing && data.status == "existing"){
        this.arrayDataTemp.push(data);
      }
      if(this.deleted && this.accepted && this.proposed && this.existing){
        this.all = true;
      }
    }
  }


  arrayData=[
    {
      id:1,
      brand:"Philips",
      price:1000,
      status:"accepted"
    },
    {
      id:2,
      brand:"Panasonic",
      price:3000,
      status:"proposed"
    },
    {
      id:3,
      brand:"Nova",
      price:2000,
      status:"existing"
    },
    {
      id:4,
      brand:"Syska",
      price:1500,
      status:"deleted"
      
    },
    {
      id:5,
      brand:"samsung",
      price:1800,
      status:"accepted"
    },
  ];




  ngOnInit() {
    this.arrayDataTemp=this.arrayData;

  }

}
