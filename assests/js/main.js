const hamburger = document.querySelector('#hamburger-one');
const navBar = document.querySelector('#navBar');

hamburger.addEventListener("click", () => {
  navBar.classList.toggle('active');
});
