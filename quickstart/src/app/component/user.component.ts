import { Component } from '@angular/core';
import { AddressComponent } from './address.component';
import {PostService}from '../services/post.service';
@Component({
  selector: 'user',
  templateUrl:'./user.component.html',
  providers:[PostService]
            
})
export class UserComponent  { 
  name : string;
  email :string;
  address :AddressComponent;
  hobbies: string[];
  showHobbies:boolean;
  posts:Post[];
    
  
  constructor(private postService: PostService){
      this.name = 'Narendra';
      this.email ='narendrapatil128@gmail.com';
      this.address ={
            Street:'ABC',
            City:'Pune',
            PIN:'41139',
        }
        this.hobbies =['abc','xyz'];
        this.showHobbies =false;
        this.postService.getPost().subscribe(posts =>{
            console.log(posts);
            this.posts= posts;
        })
  }
  toggleShowHobbies (){
      if(this.showHobbies ==true){
         this.showHobbies =false;
      }else{
          this.showHobbies =true;
      }
  }
 }
 interface Post{
     id: number;
     title: string;
     body: string;
 }
