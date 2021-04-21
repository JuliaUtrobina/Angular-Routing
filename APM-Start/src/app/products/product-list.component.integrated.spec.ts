import {ProductListComponent} from './product-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {ProductService} from './product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let mockProductService;
  let mockActivatedRoute;
  let fixture: ComponentFixture<ProductListComponent>;
  let component: ProductListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;


  // Use function to initialize service before every it call
  // To have a new class (fresh copy) not a mutable one
  beforeEach(() => {
    // Create the mock services
    mockProductService = {getProducts: () => of([{id: 1, productName: 'Product 1'}] as Product[])};
    mockActivatedRoute = {snapshot: {queryParamMap: new Map()}};
    // Create module to configure our component
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent
      ],
      providers: [
        {provide: ProductService, useValue: mockProductService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct product name', () => {
      // Do not need to predefine the data as there is ngOnInit which gets the data

      // Call change detection to render the template
      fixture.detectChanges();

      // Add expectation that name shown in div with attr 'well-title' is right
      // expect(element.querySelector('[well-title]').textContent).toContain('Product 1');
      // Add exception using debug element
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Product 1');
    });
  });
});
