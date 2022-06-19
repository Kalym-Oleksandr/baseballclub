(function () {
  
    const iconCart = document.querySelector(".cart-menu");
    const cartBody = document.querySelector(".modal-cart");
    iconCart.addEventListener("click", function (e) {
      document.body.classList.add("lock-cart");
      iconCart.classList.toggle("active");
      cartBody.classList.toggle("active");
    });
  
    const modalClose = document.querySelectorAll(".modal-close");
    modalClose.forEach((modalClose) => {
        modalClose.addEventListener("click", (_) => {
        if (iconCart.classList.contains("active")) {
          document.body.classList.remove("lock-cart");
          iconCart.classList.remove("active");
          cartBody.classList.remove("active");
        }
      });
    });
  })();