const addToCartButton = document.querySelectorAll(".cart-button");

const cartClick = (button) => {
  button.classList.add("clicked");
};
addToCartButton.forEach((button) => {
  button.addEventListener("click", () => cartClick((this.button = button)));
});
