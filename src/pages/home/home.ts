import { IpcprovProvider } from './../../providers/ipcprov/ipcprov';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private ipcp: IpcprovProvider) {

  }

  ionViewWillLeave() {

  }

  ngOnInit() {
    
  }

  goTo(mapel) {
    this.navCtrl.push("MainmenuPage", { mapel: mapel });
  }

  openModal() {

  }

  exitApp() {
    this.ipcp.send("exitApp");
  }

  private accordionic() {
    let accordion = document.getElementsByClassName("full-block");
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

}
