import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;  
    
    navbarToggler.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    });
  }

}
