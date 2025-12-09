document.addEventListener("DOMContentLoaded", function() {
    var desMenu = document.querySelector(".des_menu");
    var selectMenu = document.querySelector(".select_menu");
    var selectMenuMobile = document.querySelector(".select_menu_mobile");

    desMenu.addEventListener("click", function() {
        // Cambia la visibilidad del menú al hacer clic en el ícono
        if (selectMenu.style.display === "none") {
            selectMenu.style.display = "flex";
            selectMenu.style.flexDirection = "column";
            selectMenu.style.gap = "15px";
        } else {
            selectMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll(".close-modal");
  
    modalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
      });
    });
  
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
      });
    });
  });
