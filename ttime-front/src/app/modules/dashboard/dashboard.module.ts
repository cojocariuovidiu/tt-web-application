import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule} from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EnrolledComponent } from './components/enrolled/enrolled.component';
import { EnrolleddetailComponent } from './components/enrolleddetail/enrolleddetail.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { LecturevideoComponent } from './components/lecturevideo/lecturevideo.component';
import { DashboardService } from './services/dashboard.service';
import { MatchsettingspasswordDirective } from './components/changepassword/matchsettingspassword.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, ProfileComponent, EnrolledComponent, EnrolleddetailComponent, ChangepasswordComponent, LecturevideoComponent, MatchsettingspasswordDirective],
  providers: [DashboardService]
})
export class DashboardModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('my-second-theme');
  }
}
