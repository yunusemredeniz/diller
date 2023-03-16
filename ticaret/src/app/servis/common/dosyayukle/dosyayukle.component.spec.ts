import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosyayukleComponent } from './dosyayukle.component';

describe('DosyayukleComponent', () => {
  let component: DosyayukleComponent;
  let fixture: ComponentFixture<DosyayukleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosyayukleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosyayukleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
