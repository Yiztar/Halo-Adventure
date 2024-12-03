import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteComponent } from './foote.component';

describe('FooteComponent', () => {
  let component: FooteComponent;
  let fixture: ComponentFixture<FooteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooteComponent]
    });
    fixture = TestBed.createComponent(FooteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
