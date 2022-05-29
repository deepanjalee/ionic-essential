import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.page.html',
  styleUrls: ['./activity-video.page.scss'],
})
export class ActivityVideoPage implements OnInit {
  videoUrl: string;

  constructor(
    navParams: NavParams,
    private modalController: ModalController) {
    this.videoUrl = navParams.get('videoUrl');
    }

  ngOnInit() {
  }

  closeModel() {
    this.modalController.dismiss();
  }

}
