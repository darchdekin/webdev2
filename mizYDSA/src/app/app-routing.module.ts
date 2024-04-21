import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { NewComponent } from './components/new/new.component';
import { ViewEventComponent } from './components/view-event/view-event.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'search', component:SearchPageComponent},
  {path: 'new', component:NewComponent},
  {path: 'new/event', component: NewEventComponent},
  {path: 'new/photo', component: NewPhotoComponent},
  { path: 'event/:id', component: ViewEventComponent }
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
