import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProgramsComponent } from './our-programs.component';

describe('OurProgramsComponent', () => {
  let component: OurProgramsComponent;
  let fixture: ComponentFixture<OurProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
