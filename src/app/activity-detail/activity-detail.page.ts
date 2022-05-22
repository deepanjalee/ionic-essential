import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
    ) {
      const activityID = activatedRoute.snapshot.params["activityID"];
      //this.activityDetail = activityService.getActivity(activityID);
      //console.log(this.activityDetail);
      activityService.getActivity(activityID).subscribe(
        (activity) => {
          console.log(activity);
        }
      );

    }

  ngOnInit() {
  }

}
