import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
   //initialiser les click sur les buttons à 0 clickL représente les button love it 
   //clickD représente les buttons dislike
   clickL1 = 0;
   clickD1 = 0;
   clickL2 = 0;
   clickD2 = 0;
   clickL3 = 0;
   clickD3 = 0;
  constructor() { }
 compterL1(){
 this.clickL1 ++;
    }
   compterD1(){
 this.clickD1 ++;
    }
    compterL2(){
 this.clickL2 ++;
    }
   compterD2(){
 this.clickD2 ++;
    }
    compterL3(){
 this.clickL3 ++;
    }
   compterD3(){
 this.clickD3 ++;
    }
  
   created_at= new Date();
  
  ngOnInit() {
  }

getColor1(){
if(this.clickL1-this.clickD1>0){
return 'red';}
else if(this.clickL1-this.clickD1<0) {
      return 'green';
    }
    }
    getColor2(){
if(this.clickL2-this.clickD2>0){
return 'red';}
else if(this.clickL2-this.clickD2<0) {
      return 'green';
    }}
    getColor3(){
if(this.clickL3-this.clickD3>0){
return 'red';}
else if(this.clickL3-this.clickD3<0) {
      return 'green';
    }
}
}
   

