import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Angula6Git';

  constuctor(){

  }

  ngOnInit(): void {
      var obser= Observable.create((obs)=>{
      obs.next("visu");
      //  obs.error("error detected");
      // obs.complete();
      setTimeout(()=>{
        obs.next("suma");
      },1000) 
    });
    
    obser.subscribe((data)=>{
      console.log(data);
    })

  //==============
  var subject=new Subject()
    
      subject.subscribe(
         x =>{
           console.log(x);
         }
      )
      subject.next('hi');


    }        
}


