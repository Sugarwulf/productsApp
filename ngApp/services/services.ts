namespace productsapp.Services {

  export class ProductService {
    private ProductResource;

    public get(id) {
        return this.ProductResource.get({id:id});
      }


    public list() {
      return this.ProductResource.query()
    }

    public save(product) {
            return this.ProductResource.save(product).$promise;
          }
    constructor($resource:ng.resource.IResourceService) {
      this.ProductResource = $resource('/api/products/:id');
    }
  }

  angular.module('productsapp').service('productService', ProductService);

}
