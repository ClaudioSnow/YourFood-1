import { AngularFireDatabaseModule } from '@angular/fire/database';
import { User } from './../models/usuario';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular/dist/directives/navigation/nav-params';
import { List, Item } from '@ionic/angular';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  formulario = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.nullValidator
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.nullValidator
    ]),
  });
  user: User;

  private inicializarCliente(): void {

  }

  constructor(private afAuth:AngularFireDatabaseModule,

    public navCtrl: NavController) {

     }

  goBack() {
    this.navCtrl.navigateBack('/home')
  }

  register(user: User){

  }

  ngOnInit() {
  }

}
