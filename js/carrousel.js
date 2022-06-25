(function () {
    const slides = [
        `<article class="suvenirs-shop__product">
                          <h3 class="suvenirs-shop__product-heading">Кружка</h3>
                          <img class="suvenirs-shop__product-image" src="img/suvenirs-shop-1.png" alt="Крута кружка">
                          <p class="suvenirs-shop__product-price">Ціна: 100грн</p>
                          <button class="suvenirs-shop__product-button buy" data-id="1">Замовити</button>
                      </article>`,
        `<article class="suvenirs-shop__product">
                          <h3 class="suvenirs-shop__product-heading">Сумка</h3>
                          <img class="suvenirs-shop__product-image" src="img/suvenirs-shop-2.png" alt="Крута сумка">
                          <p class="suvenirs-shop__product-price">Ціна: 120грн</p>
                          <button class="suvenirs-shop__product-button buy" data-id="2">Замовити</button>
                      </article>`,
        `<article class="suvenirs-shop__product">
                          <h3 class="suvenirs-shop__product-heading">Кепка</h3>
                          <img class="suvenirs-shop__product-image" src="img/suvenirs-shop-3.png" alt="Крута кепка">
                          <p class="suvenirs-shop__product-price">Ціна: 130грн</p>
                          <button class="suvenirs-shop__product-button buy"data-id="3">Замовити</button>
                      </article>`,
        `<article class="suvenirs-shop__product">
                          <h3 class="suvenirs-shop__product-heading">Футболка</h3>
                          <img class="suvenirs-shop__product-image" src="img/suvenirs-shop-4.png" alt="Крута футболка">
                          <p class="suvenirs-shop__product-price">Ціна: 140грн</p>
                          <button class="suvenirs-shop__product-button buy" data-id="4">Замовити</button>
                      </article>`,
    ];

    let currentSlide = 0;

    function renderCarrousel() {
        const slideContainer = document.querySelector(
            ".suvenirs-shop__carrousel .suvenirs-shop__carrousel-slide"
        );
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 751) {
            const secondSlide =
                currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 1143) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarrousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarrousel();
    }

    renderCarrousel();

    const btnForward = document.querySelector(
        ".suvenirs-shop__carrousel .suvenirs-shop__carrousel-forward"
    );
    btnForward.addEventListener("click", nextSlide);

    const btnBack = document.querySelector(
        ".suvenirs-shop__carrousel .suvenirs-shop__carrousel-back"
    );
    btnBack.addEventListener("click", prevSlide);

    window.addEventListener("resize", renderCarrousel);

})();