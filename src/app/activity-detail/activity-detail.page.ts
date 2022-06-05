import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivityVideoPage } from '../activity-video/activity-video.page';
import { ActivityService } from '../activity.service';
import { Activity } from '../types';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {


  activityDetail: Observable<Activity>;
  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,

    private modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
    ) {
      const activityID = activatedRoute.snapshot.params["activityId"];
      setTimeout(() => {
        this.activityDetail = activityService.getActivity(activityID);
      }, 2000);
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

   addToFavoirts(){
     //get current user
      this.angularFireAuth.authState.subscribe(user => {
        if(user){

          const userId = user.uid;

          this.activityDetail.subscribe(
            (activity)=> {
              this.angularFireStore
                .collection("favorites")
                .doc(userId)
                .collection("favorites", (ref)=> {
                  return ref.where("id", "==", activity.id)
                })
                .get()
                  .subscribe((doc)=> {
                    if(doc.empty){
                      this.angularFireStore
                      .collection("favorites")
                      .doc(userId)
                       .collection("favorites")
                       .add(activity);
                    }
                  })
            }
          );


          // this.activityDetail.subscribe(activity => {
          //   const activityId = activity.id;

          //   this.angularFireStore.collection('users').doc(userId).collection('favorites').doc(activityId).set({
          //     activityId: activityId
          //   });
          // }
          // );
        }
      }
      );



    }
  }




