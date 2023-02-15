import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCardsComponent } from './items-cards.component';

describe('ItemsCardsComponent', () => {
  let component: ItemsCardsComponent;
  let fixture: ComponentFixture<ItemsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
