// import { DormPage } from './dorm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { RoomDetailPage } from '../room-detail/room-detail';

/**
 * Generated class for the DormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dorm',
  templateUrl: 'dorm.html',
})
export class DormPage {
  rentedroom: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dorm: LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DormPage');
  }

  loaddata(){
    this.dorm.getdorm().subscribe(porms=>{
      this.rentedroom=porms;
    });
  }

  getdetail(room){
    this.navCtrl.push(RoomDetailPage,room);
  }
  
  getItems(ev: any){
    let val = ev.target.value;

    if(val !=0){
      this.dorm.searchrooms(val).subscribe(RoomDetailPage =>{
         this.rentedroom = RoomDetailPage
        });
    }else{
      this.loaddata();
}
  }
}
