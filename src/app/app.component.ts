import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  topics: AngularFireList<any[]>;
  user = null;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /*{
      title: 'List',
      url: '/list',
      icon: 'list'
    },*/
    {
      title: 'Login',
      url: '/login',
      icon: 'md-at'
    }
  ];

  
  
  constructor(
    public db: AngularFireDatabase,
    private auth: AuthService,
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
    this.topics = this.db.list('/topics');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  isloggedIn(){
    return this.auth.isloggedIn();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
}
