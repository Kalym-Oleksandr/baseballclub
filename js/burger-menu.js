(function () {
    
    const iconBurger = document.querySelector(".header__navigation-burger-menu");
    const navigationBody = document.querySelector(".header__navigation-wrapper");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      iconBurger.classList.toggle("active");
      navigationBody.classList.toggle("active");
    });
    
    const navLinks = document.querySelectorAll(".header__navigation-links-link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (_) => {
        if (iconBurger.classList.contains("active")) {
          document.body.classList.remove("lock");
          iconBurger.classList.remove("active");
          navigationBody.classList.remove("active");
        }
      });
    });
    
})();