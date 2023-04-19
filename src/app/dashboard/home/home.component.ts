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

 

  constructor(private router:Router) {
   }

  ngOnInit(): void {
    
  }

  aboutUs(){
    this.router.navigate(["/about-us"]);
  }
  onPrograms(){
    this.router.navigate(["/our-programs"]);
  }



}
