import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianComponent } from './guardian.component';

describe('GuardianComponent', () => {
  let component: GuardianComponent;
  let fixture: ComponentFixture<GuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
