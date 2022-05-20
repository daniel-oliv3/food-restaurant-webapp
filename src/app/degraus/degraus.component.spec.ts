import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegrausComponent } from './degraus.component';

describe('DegrausComponent', () => {
  let component: DegrausComponent;
  let fixture: ComponentFixture<DegrausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegrausComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegrausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
