import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GfaTokenAdapter } from './token-adapter';
import { GfaAuthGuard } from './auth.guard';
import { GfaAuthService } from './auth.service';
import { GfaRoleGuard } from './role.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GfaAuthGuard,
    GfaRoleGuard,
    GfaAuthService,
    GfaTokenAdapter,
  ],
})
export class GfaAuthModule { }
