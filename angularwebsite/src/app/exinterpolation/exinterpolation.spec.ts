import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exinterpolation } from './exinterpolation';

describe('Exinterpolation', () => {
  let component: Exinterpolation;
  let fixture: ComponentFixture<Exinterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exinterpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exinterpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
