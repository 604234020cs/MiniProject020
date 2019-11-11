import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { RoomDetailPage } from '../room-detail/room-detail';

/**
 * Generated class for the ApartamenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apartamen',
  templateUrl: 'apartamen.html',
})
export class ApartamenPage {
  rentedroom: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apart:LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApartamenPage');
  }
  loaddata(){
    this.apart. getapartamen().subscribe(rooms =>{
      this.rentedroom=rooms;
    });  
  }
  getdetail(room){
    this.navCtrl.push(RoomDetailPage,room);
  }
  
  getItems(ev: any){
    let val = ev.target.value;

    if(val !=0){
      this.apart.searchrooms(val).subscribe(RoomDetailPage =>{
         this.rentedroom = RoomDetailPage
        });
    }else{
      this.loaddata();
}
  }
  }


