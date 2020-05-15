// Add some help after some time has elapsed to give folks a hint
// of what this is

var intro = document.querySelector('#intro');
var instructions = document.querySelector('#instructions');
var imgOverlay = document.querySelector('#img-overlay');
var imgFront = imgOverlay.querySelector('.front');
var imgBack = imgOverlay.querySelector('.back');
var instLink = imgOverlay.querySelector('a');

window.setTimeout(function() {
  // Fade in the intro
  intro.classList.add('fadeIn');
}, 1500);

document.querySelectorAll('.guide').forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove('fadeIn');
  });
});

// Cover now that there's a postcard wrapper
document.querySelectorAll('.guide').forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.remove('fadeIn');
  });
});

document.querySelector('#closeHelp').addEventListener("click", (e) => {
  instructions.classList.add('fadeIn');
});

document.querySelector('#img-overlay span').addEventListener("click", (e) => {
  imgOverlay.classList.remove('fadeIn');
});

// Do some stuff with the links probably ... rn they link out to Instagram
document.querySelectorAll('#wall a').forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // Update the overlay with this thing's info
    var name = e.target.title;
    var srcset_front = `./postcards/${name}_front-480w.jpeg 480w,./postcards/${name}_front-800w.jpeg 800w`;
    var srcset_back = `./postcards/${name}_back-480w.jpeg 480w,./postcards/${name}_back-800w.jpeg 800w`;
    imgFront.src = `${name}_front-480w.jpeg`;
    imgFront.srcset = srcset_front;
    imgFront.title = e.target.dataset.caption;
    imgFront.alt = e.target.dataset.alt;
    imgBack.src = `${name}_back-480w.jpeg`;
    imgBack.srcset = srcset_back;
    imgBack.title = e.target.dataset.caption;
    instLink.href = e.target.href;
    imgOverlay.classList.add('fadeIn');
  })
});


var introTextOptions = ["Someone once told me you shouldn't bother taking pictures without people when you travel, " +
  "because you can always buy a postcard with a much better photograph taken by a professional." +
  " I took that quite literally, and started collecting postcards for myself when I traveled. In 2018, I had" +
  " quite the collection when I decided not to re-create the wall again.",

  "I used to pick up postcards or small flyers to put on my wall, and this is what it looked like in 2018," +
  " although it was partially taken down when I took the picture. When I decided not to recreate the wall" +
  " when I moved, I wanted to do something with the cards.",

  "For years, I've collected postcards and put them on my wall, to mark places I've been," +
  " places that inpired me, or things I just plain like. In 2018 as part of a major life" +
  " reset, I moved, and I took down all the postcards. I didn't want to put them back up again," +
  " so then the question was, what to do with them?"
];

// Swap out the intro text for a random selection of the options for enhanced spookiness
var randomIntro = introTextOptions[Math.floor(Math.random() * introTextOptions.length)];
intro.querySelector('p').innerText = randomIntro;

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      imgOverlay.classList.remove('fadeIn');
    }
};
