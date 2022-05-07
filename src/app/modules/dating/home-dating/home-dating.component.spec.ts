import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDatingComponent } from './home-dating.component';

describe('HomeDatingComponent', () => {
  let component: HomeDatingComponent;
  let fixture: ComponentFixture<HomeDatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
