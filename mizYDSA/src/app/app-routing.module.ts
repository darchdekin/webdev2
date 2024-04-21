import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'search', component:SearchPageComponent},
  {path: 'new', component:NewComponent},
  {path: 'new/event', component: NewEventComponent},
  {path: 'new/photo', component: NewPhotoComponent}
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
