// Add some help after some time has elapsed to give folks a hint
// of what this is

var intro = document.querySelector('#intro');
var instructions = document.querySelector('#instructions');
window.setTimeout(function() {
  intro.classList.add('fadeIn');
}, 3000);

document.querySelectorAll('.guide').forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove('fadeIn');
  });
});

document.querySelector('#closeHelp').addEventListener("click", (e) => {
  instructions.classList.add('fadeIn');
});

// Do some stuff with the links probably ... rn they link out to Instagram
// document.querySelectorAll('a').forEach((item, i) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     debugger;
//   })
// });
