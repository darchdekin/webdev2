import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassNewPhotoComponent } from './mass-new-photo.component';

describe('MassNewPhotoComponent', () => {
  let component: MassNewPhotoComponent;
  let fixture: ComponentFixture<MassNewPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassNewPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassNewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
