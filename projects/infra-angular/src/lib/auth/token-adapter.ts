export class GfaTokenAdapter {

  public static KEY_STORAGE = '@gfa-token';

  public constructor() { }

  public get token(): string | null {
    return localStorage.getItem(GfaTokenAdapter.KEY_STORAGE);
  }

  public set token(token: string | null) {
    if (token != null) {
      localStorage.setItem(GfaTokenAdapter.KEY_STORAGE, token);
    }
  }

  public removeToken() {
    localStorage.removeItem(GfaTokenAdapter.KEY_STORAGE);
  }

  public get tokenIsValid() {
    return !!this.token
  }

  public get parsedToken() {
    if (this.token === 'user-1') {
      return {
        user: 'user-1',
        permissions: ['configs'],
      }
    }

    if (this.token === 'user-2') {
      return {
        user: 'user-2',
        permissions: ['configs', 'tickets'],
      }
    }

    return null;
  }
}
