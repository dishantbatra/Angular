import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from "@angular/router";
import { AuthService } from "../model/auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl("/admin/auth");
      return false;
    }
    return true;
  }
}
