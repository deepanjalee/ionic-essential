import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivityVideoPage } from '../activity-video/activity-video.page';
import { ActivityService } from '../activity.service';
import { Activity } from '../types';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {


  activityDetail: Observable<Activity>;
  constructor(
    private modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
    ) {
      const activityID = activatedRoute.snapshot.params["activityId"];
      setTimeout(() => {
        this.activityDetail = activityService.getActivity(activityID);
      }, 2000);

      //console.log(this.activityDetail);


    }

  ngOnInit() {

  }
  async openModel(){
    const videoModel = await this.modalController.create({
      component: ActivityVideoPage
    });

    return await this.activityDetail.subscribe(activity => {
      videoModel.componentProps = {
        videoUrl: activity.video_url
      };

    return videoModel.present();
  });



  }

}
