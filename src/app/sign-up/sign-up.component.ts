import { Component, OnInit } from '@angular/core';
import { userName } from '../sign-up.model'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email= 'Entrez votre email';
model : userName = new userName();

  


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("Le formulaire est envoyé")
  }

}
