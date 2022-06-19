class Cart {
    constructor() {
        this.productService = new ProductsService();
        this.cartContainer = document.querySelector('#modal-cart');
        this.cart = JSON.parse(localStorage['cart'] || '{}');
        this.addEventListeners();
        this.updateBadge();
    }

    addEventListeners() {
        document
            .querySelector('.openCartLink')
            .addEventListener('click', () => this.renderCart());
    }
    saveCart() {
        localStorage['cart'] = JSON.stringify(this.cart);
    }
    async renderCart() {
        let total = 0;
        let cartDomSting = `<div class="cart-product-list">
                      <div><b>Продукт</b></div>
                      <div><b>Ціна</b></div>
                      <div><b>Кількість</b></div>
                  </div>`;
        for (const id in this.cart) {
            const product = await this.productService.getProductById(id);
            total += product.price * this.cart[id];
            cartDomSting += `<div class="cart-product" data-id="${id}"> <div>
            <img class="cart-img" src="${product.image}">
                      <div>${product.title}</div>
                      </div>
                      <div> 
                      <div>${product.price}</div>
                      </div>
                      <div class="cart-product__button">
                      <div>${this.cart[id]}</div>
                      <button data-id=${id} class="cart-button plus">+</button>
                      <button data-id=${id} class="cart-button minus">-</button>
                  </div>
                  </div>`;
        }
        cartDomSting += `
                  <div class="cart-product-list-total">
                      <b>Всього</b>
                      <b>${total.toFixed(2)} грн.</b>
                  </div>            
          </div>`;
        this.cartContainer.querySelector(
            '.cart-product-list-container'
        ).innerHTML = cartDomSting;
        this.cartContainer
            .querySelectorAll('.plus')
            .forEach(el =>
                el.addEventListener('click', ev =>
                    this.changeQuantity(ev, this.addProduct)
                )
            );
        this.cartContainer
            .querySelectorAll('.minus')
            .forEach(el =>
                el.addEventListener('click', ev =>
                    this.changeQuantity(ev, this.deleteProduct)
                )
            );
    }
    changeQuantity(ev, operation) {
        const button = ev.target;
        const id = button.dataset.id;
        operation.call(this, id);
        this.renderCart();
    }

    addProduct(id) {
        this.cart[id] = (this.cart[id] || 0) + 1;
        this.saveCart();
        this.updateBadge();
    }

    deleteProduct(id) {
        if (this.cart[id] > 1) {
            this.cart[id] -= 1;
        } else {
            delete this.cart[id];
        }
        this.saveCart();
        this.updateBadge();
    }

    async updateBadge() {
        const { count, cost } = await this.cartLengthAndCost();
        document.querySelector('#cart-badge').innerText = `Корзина: ${count} ${cost.toFixed(0)}грн.`;
        if (count === 0) {
            document.querySelector("#navbarNav > div").classList.add('d-none');
        } else {
            document.querySelector("#navbarNav > div").classList.remove('d-none');
        }
    }

    async cartLengthAndCost() {
        let count = 0;
        let cost = 0;
        for (const key in this.cart) {
            const product = await this.productService.getProductById(key);
            const quantity = this.cart[key];
            count += quantity;
            cost += quantity * product.price;
        }
        return {
            count, cost
        };
    }
}