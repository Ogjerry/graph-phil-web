import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtreeComponent } from './ltree.component';

describe('LtreeComponent', () => {
  let component: LtreeComponent;
  let fixture: ComponentFixture<LtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LtreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
