import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepModalComponent } from './dep-modal.component';

describe('DepModalComponent', () => {
  let component: DepModalComponent;
  let fixture: ComponentFixture<DepModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepModalComponent]
    });
    fixture = TestBed.createComponent(DepModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
