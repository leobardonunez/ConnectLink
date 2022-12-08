import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoGridComponent } from './components/info-grid/info-grid.component';
import { IntroPresenceComponent } from './components/intro-presence/intro-presence.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExtraInfoComponent } from './components/extra-info/extra-info.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { MapComponent } from './components/map/map.component';
import { PlanesComponent } from './components/planes/planes.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactoService } from './services/contacto.service';
import { SvgNavbarComponent } from './components/svg-navbar/svg-navbar.component';
import { FooterComponent } from './components/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    InfoGridComponent,
    IntroPresenceComponent,
    NavbarComponent,
    ExtraInfoComponent,
    SocialBarComponent,
    MapComponent,
    PlanesComponent,
    NosotrosComponent,
    ContactComponent,
    SvgNavbarComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule               
  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
