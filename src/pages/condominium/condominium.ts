import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { RoomDetailPage } from '../room-detail/room-detail';

/**
 * Generated class for the CondominiumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-condominium',
  templateUrl: 'condominium.html',
})
export class CondominiumPage {

  
  rentedroom: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public condo: LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CondominiumPage');
  }
  loaddata(){
    this.condo.getcondominium().subscribe(condos=>{
      this.rentedroom=condos;
    });
  }
  getdetail(room){
    this.navCtrl.push(RoomDetailPage,room);
  }

  getItems(ev: any){
    let val = ev.target.value;

    if(val !=0){
      this.condo.searchrooms(val).subscribe(RoomDetailPage =>{
         this.rentedroom = RoomDetailPage
        });
    }else{
      this.loaddata();
}
  }
}
