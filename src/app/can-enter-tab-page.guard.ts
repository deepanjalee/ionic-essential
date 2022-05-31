import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanEnterTabPageGuard implements CanActivate {

  constructor( private angularFireAuth: AngularFireAuth,
    private router: Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.angularFireAuth.authState.pipe(map((auth) => {

        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }));
  }

}
