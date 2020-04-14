import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { FormGroup, FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  constructor(private _csService:CountryService,private fb: FormBuilder,private router:Router) { }
  
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
    //=======

    this._csService.getCountry().subscribe( (data)=>{
      this.countryData=data;
      console.log(this.countryData);
    });

  }

//======================

countryData:any=[];
    stateData:any=[];
    cityData:any=[];
  


  getState(event){
    // let coun={
    //   country_id:event.target.value
    // };
      this._csService.getState(event).subscribe((res)=>{
        console.log(res);
        this.stateData=res;
      });
	this.cityData=null;
      // console.log(event);
  }


  getCity(event){
      this._csService.getCity(event).subscribe((res)=>{
        console.log(res);
        this.cityData=res;
      })
  }

//====================================

userDetails = [];


  changeDataRadio(data){                                              
    this.userData.forEach(i => {
      if(i.name != data.name){
        i.flag = false;
      }
    });
    this.userDetails = data.details;
  }
//==================
// changeData(data){
//   for(let i of this.userData){
//     if(i.name !== data.name){
//       i.flag=false;
//     }
//   }
//   this.userDetails=data.details;
// }
//=======================



  userData=[
    {
      name:"visu",
      flag:false,
      details:[
        {
          gender:"male",
          age:25
        }
      ]
    },
    // {
    //   name:"visu",
    //   flag:false,
    //   details:[
    //     {
    //       gender:"male",
    //       age:25
    //     }
    //   ]
    // },   //second radio button with same details
    {
      name:"guna",
      flag:false,
      details:[
        {
          gender:"male",
          age:16
        }
      ]

    },
    {
      name:"anushka",
      flag:false,
      details:[
        {
          gender:"female",
          age:37
        }
      ]

    }

  ];


  //=============================

  myForm2= new FormGroup({
    name:new FormControl(),
    checkValue:new FormControl(),
    dob:new FormControl(),
    mobile:new FormControl()
  })

//==============================

userForm = this.fb.group({
  firstname:['',Validators.required],
  age:[''],
  email:[''],
  mobiles:this.fb.array([
    this.fb.control('')
  ])
})

get mobiles(){
  return this.userForm.get('mobiles') as FormArray;
}

addNewMobile(){
this.mobiles.push(this.fb.control(''));
}

deleteNumber(index){
  this.mobiles.removeAt(index);
}
counter:number;
onSubmit(){
// console.log(this.userForm.value);
// console.log(this.userForm.controls['firstname'].value);
// var firstname=this.userForm.get('firstname').value;
// console.log(firstname);
// console.log(this.userForm.get('lastname').value);
// console.log(this.userForm.get(['address','address1']).value);
//  console.log("Mobiele 1 is"+this.userForm.get(['mobiles','0']).value);

this.counter=0;
for(let mob of this.mobiles.controls){

  console.log("Mobile "+(this.counter+1)+"::"+this.userForm.get(['mobiles',this.counter]).value);
  this.counter++;
}

}

//============================


country:string;
  countries=["India","USA","Japan","Canada"];
  
  navigate(){
    this.router.navigate(['../dashboard']);
  }

  navigate2(){
    this.router.navigate(['../animation']);
  }

}
