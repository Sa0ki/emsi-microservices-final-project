import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {AppStateService} from "../services/app-state.service";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthorizationGuard implements CanActivate{
  constructor(private appStateService: AppStateService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.appStateService.authState.roles.includes(route.data["roles"]))
      return true;
    this.router.navigateByUrl("/admin/not-authorized")
    return false;
  }
};
