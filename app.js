// set initial value
let count = 0;

// select value and buttons
const value = document.getElementById('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    }
    value.textContent = count;
  });
});
