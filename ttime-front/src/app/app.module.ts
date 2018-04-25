import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpModule } from '@angular/http';
import { MaterialModule} from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ErrorService } from './services/error.service';
import { GOOGLE_MAP_API_KEY } from './config/config';
import { CoreService } from './services/core.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_API_KEY
    }),
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ErrorService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
