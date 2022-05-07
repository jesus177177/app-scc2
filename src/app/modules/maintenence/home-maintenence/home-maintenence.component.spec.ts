import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaintenenceComponent } from './home-maintenence.component';

describe('HomeMaintenenceComponent', () => {
  let component: HomeMaintenenceComponent;
  let fixture: ComponentFixture<HomeMaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
