import { CadastroPage } from './../cadastro/cadastro.page';
import { Component } from '@angular/core';
import { Button, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  username: string;
  password: string;
  pushPage: any;
  constructor(public navCtrl: NavController) {
    this.pushPage = CadastroPage

  }
  login() {
    console.log("Username: " + this.username)
    console.log("Password: " + this.password)
  }

  goLogin() {
    return this.navCtrl.navigateForward('/LoginPage');
  }

  goCadastro() {
    return this.navCtrl.navigateForward('/cadastro');
  }
}

