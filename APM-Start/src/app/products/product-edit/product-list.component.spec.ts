import {of} from 'rxjs';
import {ProductListComponent} from '../product-list.component';
import {Product} from '../product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let mockProductService;
  let mockActivatedRoute;

  // Use function to initialize service before every it call
  // To have a new class (fresh copy) not a mutable one
  beforeEach(() => {
    component = new ProductListComponent(mockProductService, mockActivatedRoute);
  });

  describe('makeFilteringAfterNgOnInit', () => {
    it('should filter of products be correct', () => {
      component.products = [{id: 1, productName: 'One'}, {id: 2, productName: 'Two'}, {id: 3, productName: 'Ones'}] as Product[];
      component.listFilter = 'One';
      component.makeFilteringAfterNgOnInit();

      expect(component.filteredProducts.length).toBe(2);
    });
  });
});
