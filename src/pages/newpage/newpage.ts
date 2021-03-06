import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PerfilJobsPage } from '../perfil-jobs/perfil-jobs';

@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html'
})
export class NewPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }
  perfil() {
    this.navCtrl.push(PerfilJobsPage, {
    });
  }
}
