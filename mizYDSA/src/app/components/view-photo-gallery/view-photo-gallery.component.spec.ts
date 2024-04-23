import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotoGalleryComponent } from './view-photo-gallery.component';

describe('ViewPhotoGalleryComponent', () => {
  let component: ViewPhotoGalleryComponent;
  let fixture: ComponentFixture<ViewPhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPhotoGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
