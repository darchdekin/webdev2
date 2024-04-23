import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FeaturedCollectionComponent } from './components/featured-collection/featured-collection.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { NewComponent } from './components/new/new.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEventComponent } from './components/view-event/view-event.component';
import { MassNewPhotoComponent } from './components/mass-new-photo/mass-new-photo.component';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import { ViewPhotoGalleryComponent } from './components/view-photo-gallery/view-photo-gallery.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterComponent,
    HomepageComponent,
    PageNotFoundComponent,
    SearchPageComponent,
    FeaturedCollectionComponent,
    NewEventComponent,
    NewPhotoComponent,
    NewComponent,
    ViewEventComponent,
    MassNewPhotoComponent,
    ViewPhotoComponent,
    ViewPhotoGalleryComponent,
    PhotoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
