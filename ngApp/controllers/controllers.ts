namespace productsapp.Controllers {

    export class HomeController {
        public products;
        public product;

        public save() {
          this.productService.save(this.product).then(() => {
            this.products = this.productService.list(); //redisplay list
            this.product = null;
          });
        }

        public remove(productId) {
              this.productService.remove(productId).then(() => {
                this.products = this.productService.list();
              });
            }

        constructor(private productService) {
          this.products = productService.list();
        }
    }

    export class EditController {
      public product;

      public save() {
              this.productService.save(this.product).then(() => {
                this.$state.go('home');
              });
            }

      constructor(
        private productService:productsapp.Services.ProductService,
        private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService
      ) {
        let productId = $stateParams['id'];
        this.product = productService.get(productId);
      }

    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
