import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { NewPage } from '../newpage/newpage';
import { MaquillajePage } from '../maquillaje/maquillaje';
import { UnasPage } from '../unas/unas';
import { PagosPage } from '../pagos/pagos';

@Component({
  selector: 'page-next-cita',
  templateUrl: 'next-cita.html'
})
export class NextCitaPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  new() {
    this.navCtrl.push(NewPage, {
    });
  }
  maqui() {
    this.navCtrl.push(MaquillajePage, {
    });
  }
  unas() {
    this.navCtrl.push(UnasPage, {
    });
  }
  pago() {
    this.navCtrl.push(PagosPage, {
    });
  }
}
