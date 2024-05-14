import { Page } from './services/page-name.service';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public titleService: Title, public page: Page) {}
}