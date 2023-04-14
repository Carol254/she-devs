import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  focus: any;
  focus1: any;

  emailAddress:any ='shedevskenya@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    window.location.href = `mailto:${this.emailAddress}`;
  }
}
