import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { NewComponent } from './components/new/new.component';
import { ViewEventComponent } from './components/view-event/view-event.component';
import { MassNewPhotoComponent } from './components/mass-new-photo/mass-new-photo.component';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import { ViewPhotoGalleryComponent } from './components/view-photo-gallery/view-photo-gallery.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, title: 'Mizzou YDSA'},
  {path: 'search', component:SearchPageComponent},
  {path: 'new', component:NewComponent},
  {path: 'new/event', component: NewEventComponent},
  {path: 'new/photo', component: NewPhotoComponent},
  {path: 'new/mass-photo', component: MassNewPhotoComponent},
  {path: 'event/:id', component: ViewEventComponent, title: 'Event'},
  {path: 'photos/event/:id', component: ViewPhotoGalleryComponent, title: 'Event Photos'},
  {path: 'photo/:id', component: ViewPhotoComponent, title: 'Photo'}
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
