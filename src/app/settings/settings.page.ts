import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone:false
})
export class SettingsPage {
  userName: string = '';
  selectedColor: string = 'white';

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    const name = localStorage.getItem('userName');
    const color = localStorage.getItem('backgroundColor');
    
    if (name) this.userName = name;
    if (color) this.selectedColor = color;
  }

  save() {
    localStorage.setItem('userName', this.userName);
    localStorage.setItem('backgroundColor', this.selectedColor);
    this.navCtrl.back();
  }

  cancel() {
    this.navCtrl.back();
  }
}