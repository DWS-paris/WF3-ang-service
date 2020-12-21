import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonePageComponent } from './readone-page.component';

describe('ReadonePageComponent', () => {
  let component: ReadonePageComponent;
  let fixture: ComponentFixture<ReadonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
