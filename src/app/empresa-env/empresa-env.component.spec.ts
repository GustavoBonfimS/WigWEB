import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEnvComponent } from './empresa-env.component';

describe('EmpresaEnvComponent', () => {
  let component: EmpresaEnvComponent;
  let fixture: ComponentFixture<EmpresaEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
