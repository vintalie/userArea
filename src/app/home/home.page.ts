import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage implements OnInit {
  userName: string = 'Usuário';
  backgroundColor: string = 'white';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const name = localStorage.getItem('userName');
    const color = localStorage.getItem('backgroundColor');
    
    if (name) this.userName = name;
    if (color) this.backgroundColor = color;
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }
}