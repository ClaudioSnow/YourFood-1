import { LoginPage } from './../login/login.page';
import { FoodPage } from './../food/food.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  pushPage: any;
  constructor(public navCtrl: NavController){
    this.pushPage = FoodPage;
    this.pushPage = LoginPage;
 }
 pushFood() {
  return this.navCtrl.navigateForward('/food');
}
outrometodo(){
  console.log('entrou no outro');
}

pushLogin() {
  console.log('entrouuuuuu');
  return this.navCtrl.navigateForward('/login');
}

  
}
