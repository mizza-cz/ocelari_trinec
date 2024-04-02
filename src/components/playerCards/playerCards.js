const checkboxes = document.querySelectorAll(
  '.selectionForm__item .styled-input-single input[type="checkbox"]'
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const countContainer = this.closest(".selectionForm__item").querySelector(
      ".selectionForm__count"
    );
    if (this.checked) {
      countContainer.classList.add("active");
    } else {
      countContainer.classList.remove("active");
    }
  });
});

counter();

function counter() {
  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const counterContainer = this.closest(".selectionForm__count");
      const inp = counterContainer.querySelector(".counter__value");
      let currentValue = +inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;

      const minusBtn = counterContainer.querySelector(
        '.counter__btn[data-direction="minus"]'
      );
      if (newValue === 0) {
        minusBtn.setAttribute("disabled", "disabled");
      } else {
        minusBtn.removeAttribute("disabled");
      }
    });
  });
}
