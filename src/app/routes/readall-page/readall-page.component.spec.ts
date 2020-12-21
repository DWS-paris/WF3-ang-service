import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadallPageComponent } from './readall-page.component';

describe('ReadallPageComponent', () => {
  let component: ReadallPageComponent;
  let fixture: ComponentFixture<ReadallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadallPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
