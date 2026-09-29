document.querySelectorAll(".js-director-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".directorCard");
    const detail = card.querySelector(".js-director-detail");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    detail.classList.toggle("is-open", !isOpen);
  });
});
