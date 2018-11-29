import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
  
})
export class FoodPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.navigateBack('/home')
  }

  ngOnInit() {
  }

}
