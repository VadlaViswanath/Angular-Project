import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula6Git';

  constuctor(){

    var subject=new Subject()

      subject.subscribe(
         x =>{
           console.log(x);
         }
      )

      subject.next('hi');





    const observable = Observable.create((obs:any)=>{
      obs.next("hi");
      obs.next("visu");
    });
    
    observable.subscribe((data)=>{
      console.log(data)
    })
  }


}


