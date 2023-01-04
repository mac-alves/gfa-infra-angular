import { Injectable } from '@angular/core';
import { GfaTokenAdapter } from './token-adapter';

@Injectable({
  providedIn: 'root'
})
export class GfaAuthService {

  constructor(private tokenAdapter: GfaTokenAdapter) { }

  isTokenValid() {
    return this.tokenAdapter.tokenIsValid;
  }

  singOut() {
    this.tokenAdapter.removeToken();
    document.location.href = '/auth';
  }

  hasPermission(permission: string) {
    const token = this.tokenAdapter.parsedToken;

    if (token) {
      return token.permissions.includes(permission);
    }

    return false;
  }
}
