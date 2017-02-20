import { Component } from '@angular/core';
import {PostsService } from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers:[PostsService]
})
export class UserComponent  { 
  name  :string; 
  email  :string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];

  constructor(private postsService:PostsService){
    this.name = 'Angular3'; 
    this.email='xuedagong@qq.com';
    this.address={
      street:'12 街道 ',
      city:"南京"
    };
    this.hobbies=['faldfja','eating','sleep'];
    this.showHobbies=false;
    this.postsService.getPosts().subscribe(posts=>{
        this.posts=posts;
        console.log(posts);
    });


  }

  toggleHobbies(){
    console.log('show');
    this.showHobbies=  !this.showHobbies;
    // <input type='text' name='name' [(ngModel)] ="name">
  }

  delHobby(i:number){
     this.hobbies.splice(i,1);
  }
}

interface address{
  street:string;
  city:string;

}

interface  Post{
  id:number;
  userId:number;
  title:string;
  body:string;
}