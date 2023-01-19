import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloProduttoreComponent } from './profilo-produttore.component';

describe('ProfiloProduttoreComponent', () => {
  let component: ProfiloProduttoreComponent;
  let fixture: ComponentFixture<ProfiloProduttoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiloProduttoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloProduttoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
