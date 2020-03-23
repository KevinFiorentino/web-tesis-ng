import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoCiudadesComponent } from './pronostico-ciudades.component';

describe('PronosticoCiudadesComponent', () => {
  let component: PronosticoCiudadesComponent;
  let fixture: ComponentFixture<PronosticoCiudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronosticoCiudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosticoCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
