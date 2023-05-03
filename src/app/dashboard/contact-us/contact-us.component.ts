import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  focus: any;
  focus1: any;

  FormData!: FormGroup;



  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Name:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      Message:new FormControl('',[Validators.required]),

    })
  }

}
