import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTimeGuideComponent } from 'src/app/component/c-timeguide/c-time-guide.component';

describe('CTimelineComponent', () => {
  let component: CTimeGuideComponent;
  let fixture: ComponentFixture<CTimeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTimeGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTimeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
