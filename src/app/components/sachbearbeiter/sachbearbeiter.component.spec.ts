import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachbearbeiterComponent } from './sachbearbeiter.component';

describe('SachbearbeiterComponent', () => {
  let component: SachbearbeiterComponent;
  let fixture: ComponentFixture<SachbearbeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachbearbeiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SachbearbeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
