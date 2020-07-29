import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRatingModalComponent } from './info-rating-modal.component';

describe('InfoRatingModalComponent', () => {
  let component: InfoRatingModalComponent;
  let fixture: ComponentFixture<InfoRatingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRatingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRatingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
