import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: BarcodeScannerOptions;
  results: {};
  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {

  }

  async scanBarcode() {

    this.options = {
      prompt: 'Scan a barcode to see the result'
    }
    const results = await this.barcode.scan();
    console.log(this.results);
  }

  async  encodeData() {
    await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, 'https://ionicframework.com/docs')
  }

}
