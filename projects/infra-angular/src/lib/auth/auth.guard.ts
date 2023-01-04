import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GfaTokenAdapter } from './token-adapter';

@Injectable()
export class GfaAuthGuard implements CanActivate {

  constructor(private tokenAdapter: GfaTokenAdapter, public router: Router) { }

  isTokenValid() {
    return this.tokenAdapter.tokenIsValid;
  }

  canActivate(): boolean {
    if (!this.isTokenValid()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
}
