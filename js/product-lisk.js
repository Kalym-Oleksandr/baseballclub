class ProductList {
    constructor(cart) {
        this.cart = cart;
        this.productService = new ProductsService();
        this.productService
        .getProducts()
        .then(() => this.addEventListeners());
        document.querySelector('.suvenirs-shop__carrousel-back').addEventListener('click', async () => {
            await this.addEventListeners();
        });
        document.querySelector('.suvenirs-shop__carrousel-forward').addEventListener('click', async () => {
            await this.addEventListeners();
        });
        window.addEventListener("resize", async () => {
            await this.addEventListeners();
        });
    }
    async addEventListeners() {
        document.querySelectorAll(
            'button.buy'
          )
          .forEach(button =>
            button.addEventListener('click', event =>
              this.handleProductBuyClick(event)
            )
          );
    }
    handleProductBuyClick(event) {
        const button = event.target;
        const id = button.dataset.id;
        this.cart.addProduct(id);
    }
}