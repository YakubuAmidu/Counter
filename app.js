// set initial value
let count = 0;

// select value and buttons
const value = document.getElementById('#value');
const btns = document.querySelectorAll('btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.currentTarget);
  });
});
