// Add some help after some time has elapsed to give folks a hint
// of what this is

var intro = document.querySelector('#intro');
window.setTimeout(function() {
  intro.classList.add('fadeIn');
}, 5000);

document.querySelector('#closeIntro').addEventListener("click", (e) => {
  intro.classList.remove('fadeIn');
});

// document.querySelectorAll('a').forEach((item, i) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     debugger;
//   })
// });
