import {ProductService} from './product.service';
import {of} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {Product} from './product';

describe('ProductService', () => {
  let productsService: ProductService;
  let mockHttp;
  const productsUrl = 'api/products';
  // Use function to initialize service before every it call
  // To have a new class (fresh copy) not a mutable one
  beforeEach(() => {
    // Create a mock object with needed methods which are used in the service
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'delete', 'put']);
    productsService = new ProductService(mockHttp);
  });

  describe('deleteProduct', () => {
    it('should call http.delete with the right URL', () => {
      // Define what delete function will return in result
      mockHttp.delete.and.returnValue(of({}));
      productsService.deleteProduct(1);
      expect(mockHttp.delete).toHaveBeenCalledWith(`${productsUrl}/1`, jasmine.any(Object));
    });
  });

  describe('addProduct', () => {
    it('should call http.post with the right URL', () => {
      const product = {id: 1, productName: 'New'} as Product;
      // Define what post function will return in result
      mockHttp.post.and.returnValue(of({}));
      productsService.createProduct(product);
      // jasmine.any(Object) Check if something like type of object was passed (assume its correct)
      expect(mockHttp.post).toHaveBeenCalledWith(productsUrl, product, jasmine.any(Object));
    });
  });
});
