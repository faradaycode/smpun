import { MethodeProvider } from './../../providers/methode/methode';
import { IpcprovProvider } from './../../providers/ipcprov/ipcprov';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, 
    private ipcp: IpcprovProvider, private me: MethodeProvider) {

  }

  ionViewWillLeave() {

  }

  ngOnInit() {
    this.accordionic("box-menu");
  }

  goTo(mapel, kelas, paket = null) {
    this.navCtrl.push("QuisPage", { 
      mapel: mapel,
      kelas: kelas
    });
  }

  nextPage(pagename) {
    this.navCtrl.push(pagename);
  }

  openModal() {

  }

  exitApp() {
    this.ipcp.send("exitApp");
  }

  private accordionic(css_classname) {
    let accordion = document.getElementsByClassName(css_classname);
    let i;

    for (i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function() {
        let panels = this.nextElementSibling //get its below class;

        if (panels.style.maxHeight) {
          panels.style.maxHeight = null;
        } else {
          panels.style.maxHeight = panels.scrollHeight + "px";
        }

        console.log(panels);
      });
    }
  }

  private openDialog() {
    let modal = this.modalCtrl.create("ModalstartPage", null, {
      cssClass: "info-modal"
    });
    modal.present();
  }

  private openFacebook() {
    this.ipcp.send("openFB");
  }

}
