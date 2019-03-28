import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  showAge:string="hidden";

  user = {
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
   
  };

  constructor() { }

  ngOnInit() {
  }

  displayAge(){
    if (this.showAge=="hidden"){
      this.showAge="visible";
    }
    else {
      this.showAge="hidden";
    }
  }


}
