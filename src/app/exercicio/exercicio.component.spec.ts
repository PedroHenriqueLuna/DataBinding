import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioComponent } from './exercicio.component';

describe('ExercicioComponent', () => {
  let component: ExercicioComponent;
  let fixture: ComponentFixture<ExercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicioComponent]
    });
    fixture = TestBed.createComponent(ExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
