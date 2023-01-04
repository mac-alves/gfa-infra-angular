import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { GfaTokenAdapter } from './token-adapter';


@Injectable()
export class GfaRoleGuard implements CanActivate {

  constructor(private tokenAdapter: GfaTokenAdapter, public router: Router) { }

  isTokenValid() {
    return this.tokenAdapter.tokenIsValid;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const permission = route.data['expectedRole'];
    const token = this.tokenAdapter.parsedToken;
    const hasPermission = token ? token.permissions.includes(permission) : false;

    if (!hasPermission) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
