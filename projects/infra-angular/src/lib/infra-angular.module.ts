import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GfaAuthModule } from './auth/auth.module';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    GfaAuthModule,
  ],
  exports: [
    GfaAuthModule,
  ]
})
export class GfaInfraAngularModule {

  constructor(@Optional() @SkipSelf() parentModule?: GfaInfraAngularModule) {

    if (parentModule) {
      throw new Error(
        'GfaInfraAngularModule já foi carregado. Importe apenas em AppModule!',
      );
    }

    console.debug('GfaInfraAngularModule carregado.');
  }
}
