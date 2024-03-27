import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RossmannUiComponent } from './rossmann-ui.component';

describe('RossmannUiComponent', () => {
  let component: RossmannUiComponent;
  let fixture: ComponentFixture<RossmannUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RossmannUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RossmannUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
