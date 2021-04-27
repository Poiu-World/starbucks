const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');  //searchEl 안에 input 요소를 찾게 됨

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//focused 해제(blur)
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2021