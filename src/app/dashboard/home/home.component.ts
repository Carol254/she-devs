import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  focus: any;
  focus1: any;

  emailAddress:any ='shedevskenya@gmail.com';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   

  aboutUs(){
    this.router.navigate(["dashboard/about-us"]);
  }
  onPrograms(){
    this.router.navigate(["dashboard/our-programs"]);
  }
  sendMessage(){
    window.location.href = `mailto:${this.emailAddress}`;
  }


}
