import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductosComponent } from './post-productos.component';

describe('PostProductosComponent', () => {
  let component: PostProductosComponent;
  let fixture: ComponentFixture<PostProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
