import { AuthService } from '../shared/auth.service';
import { OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { CadastroPage } from './../cadastro/cadastro.page';
import { Component } from '@angular/core';
import { Button, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  topics: AngularFireList<any[]>;
  user = null;
  username: string;
  password: string;
  pushPage: any;
  constructor(
    public db: AngularFireDatabase,
    private auth: AuthService,
    public navCtrl: NavController) {
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

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
    this.topics = this.db.list('/topics');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  isloggedIn() {
    return this.auth.isloggedIn();
  }
}

