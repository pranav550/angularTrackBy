import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularngTrackBy';

 students:any[];

 constructor(){
   this.students=[
     {
       studentId:1,
       name:"amit",
       gender:"M",
       age:20
     },
     {
      studentId:2,
      name:"bbbbb",
      gender:"M",
      age:21
    },
    {
      studentId:3,
      name:"cccccc",
      gender:"M",
      age:22
    },
   ]
 }

 getMore():void{
  this.students=[
    {
      studentId:1,
      name:"amit",
      gender:"M",
      age:20
    },
    {
     studentId:2,
     name:"bbbbb",
     gender:"M",
     age:21
   },
   {
     studentId:3,
     name:"cccccc",
     gender:"M",
     age:22
   },
   {
    studentId:4,
    name:"dddddd",
    gender:"M",
    age:23
  },
  ]
 }

 trackByGetMore(index:number, student:any){
      return student.studentId
 }
}
