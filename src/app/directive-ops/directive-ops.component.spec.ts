import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveOpsComponent } from './directive-ops.component';

describe('DirectiveOpsComponent', () => {
  let component: DirectiveOpsComponent;
  let fixture: ComponentFixture<DirectiveOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
