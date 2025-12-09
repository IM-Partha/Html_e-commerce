const hamburger = document.querySelector('#hamburger-one');
const navBar = document.querySelector('#navBar');

hamburger.addEventListener("click", () => {
  navBar.classList.toggle('active');
});





const user = document.querySelector('#userIcon')
const accountSection = document.querySelector('.account-box')

user.addEventListener('click',()=>{
  accountSection.classList.toggle('active')
})
