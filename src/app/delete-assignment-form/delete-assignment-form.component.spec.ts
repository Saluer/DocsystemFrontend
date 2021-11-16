import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssignmentFormComponent } from './delete-assignment-form.component';

describe('DeleteAssignmentFormComponent', () => {
  let component: DeleteAssignmentFormComponent;
  let fixture: ComponentFixture<DeleteAssignmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAssignmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
