import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CaretRightComponent } from './icons/caret-right/caret-right.component';
import { CheckCircleComponent } from './icons/check-circle/check-circle.component';
import { DiscordLogoComponent } from './icons/discord-logo/discord-logo.component';
import { FileArrowDownComponent } from './icons/file-arrow-down/file-arrow-down.component';
import { LightningComponent } from './icons/lightning/lightning.component';
import { LockComponent } from './icons/lock/lock.component';
import { LogoComponent } from './icons/logo/logo.component';

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
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [
    LogoComponent,
    CheckCircleComponent,
    LockComponent,
    DiscordLogoComponent,
    LightningComponent,
    FileArrowDownComponent,
    CaretRightComponent,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
