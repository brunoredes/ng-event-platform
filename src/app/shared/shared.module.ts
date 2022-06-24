import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './icons/logo/logo.component';
import { CheckCircleComponent } from './icons/check-circle/check-circle.component';
import { LockComponent } from './icons/lock/lock.component';
import { DiscordLogoComponent } from './icons/discord-logo/discord-logo.component';
import { LightningComponent } from './icons/lightning/lightning.component';
import { FileArrowDownComponent } from './icons/file-arrow-down/file-arrow-down.component';
import { CaretRightComponent } from './icons/caret-right/caret-right.component';

@NgModule({
  declarations: [
    LogoComponent,
    CheckCircleComponent,
    LockComponent,
    DiscordLogoComponent,
    LightningComponent,
    FileArrowDownComponent,
    CaretRightComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LogoComponent,
    CheckCircleComponent,
    LockComponent,
    DiscordLogoComponent,
    LightningComponent,
    FileArrowDownComponent,
    CaretRightComponent
  ],
})
export class SharedModule {}
