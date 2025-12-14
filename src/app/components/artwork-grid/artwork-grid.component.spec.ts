import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkGridComponent } from './artwork-grid.component';

describe('ArtworkGridComponent', () => {
  let component: ArtworkGridComponent;
  let fixture: ComponentFixture<ArtworkGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
