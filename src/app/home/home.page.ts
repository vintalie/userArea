import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage implements AfterViewChecked {
  userName: string = 'Usuário';
  backgroundColor: string = 'white';

  constructor(private router: Router) {}
//https://www.freecodecamp.org/portuguese/news/hooks-do-ciclo-de-vida-do-angular-ngonchanges-ngoninit-e-muito-mais/

//eu nunca ia saber disso
  ngAfterViewChecked() {
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