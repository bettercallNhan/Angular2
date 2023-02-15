import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCard2Component } from './items-card2.component';

describe('ItemsCard2Component', () => {
  let component: ItemsCard2Component;
  let fixture: ComponentFixture<ItemsCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
