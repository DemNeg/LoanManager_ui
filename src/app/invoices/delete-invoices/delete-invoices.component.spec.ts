import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInvoicesComponent } from './delete-invoices.component';

describe('DeleteInvoicesComponent', () => {
  let component: DeleteInvoicesComponent;
  let fixture: ComponentFixture<DeleteInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
