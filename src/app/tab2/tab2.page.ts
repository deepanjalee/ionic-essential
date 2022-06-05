import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  faviouritList: Observable<any>;


  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) {

    //get current user
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        this.faviouritList = this.angularFireStore.collection("favorites")
          .doc(userId).collection("favourites").valueChanges();
      }

      });



  }

}
