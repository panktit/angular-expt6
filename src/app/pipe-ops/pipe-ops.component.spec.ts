import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOpsComponent } from './pipe-ops.component';

describe('PipeOpsComponent', () => {
  let component: PipeOpsComponent;
  let fixture: ComponentFixture<PipeOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
