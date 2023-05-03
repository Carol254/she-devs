import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  focus: any;
  focus1: any;

  formData!: FormGroup;



  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {

    this.formData = this.builder.group({
      
    })
  }

}
