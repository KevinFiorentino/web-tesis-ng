import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoHoyComponent } from './pronostico-hoy.component';

describe('PronosticoHoyComponent', () => {
  let component: PronosticoHoyComponent;
  let fixture: ComponentFixture<PronosticoHoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronosticoHoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosticoHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
