import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduttoriComponent } from './produttori.component';

describe('ProduttoriComponent', () => {
  let component: ProduttoriComponent;
  let fixture: ComponentFixture<ProduttoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduttoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduttoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
