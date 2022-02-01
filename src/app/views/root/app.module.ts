import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { PageLoaderComponent } from 'src/app/components/page-loader/page-loader.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';
import { StripeComponent } from 'src/app/components/stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageLoaderComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    SkillsComponent,
    StripeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
