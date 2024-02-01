const watchAdButton = document.querySelector('#watch-ad-button');
const modal = document.querySelector('.modal');
const link = document.querySelector('#youtube');
const buttonsContainer = document.querySelector('.buttons');
const body = document.querySelector('body');
const adsRemaining = document.querySelector('#remaining');
const videos = [
  'https://www.youtube.com/embed/s0brZ8Cinao?si=uCGcEqt4fmfCt7gs',
  'https://www.youtube.com/embed/wYX_zhlTDr8?si=4Tic_FPJOX1CF6rM',
  'https://www.youtube.com/embed/47cAxRX3aDg?si=F7mCVxAS2BYKbkwT',
  'https://www.youtube.com/embed/CVS1UfCfxlU?si=2xAHnnqcK626zXPY',
  'https://www.youtube.com/embed/N5oYdKJEpNo?si=xnUjRqB2_0y_XGQs',
  'https://www.youtube.com/embed/7oBZ8sBjdyQ?si=TtpJXvsInZryqZDl',
  'https://www.youtube.com/embed/9KBXcpJfmj4?si=cP1NWPQ2iLkaOSMw',
  'https://www.youtube.com/embed/aP2up9N6H-g?si=Uhrj1EoDqxnp7SU0',
];
let counter = 0;
let adCount = 2;

watchAdButton.addEventListener('click', () => {
  modal.showModal();
  adsLeft();
  playYoutubeLink();
});

function playYoutubeLink() {
  const randomNum = Math.floor(Math.random() * 8);
  decideYoutubeVideo(randomNum);

  if (counter === 2) {
    const divisionBtn = document.createElement('button');
    divisionBtn.textContent = '/';
    divisionBtn.classList.add('math');
    buttonsContainer.appendChild(divisionBtn);
    watchAdButton.setAttribute('disabled', '');
    watchAdButton.classList.add('disabled');
  }
  setTimeout(() => {
    link.src = '';
    modal.close();
  }, 15000);
}

function decideYoutubeVideo(num) {
  counter += 1;
  link.src = videos[num] + '?&autoplay=1&muted=1';
  link.setAttribute('muted', '');
}

function adsLeft() {
  adCount -= 1;
  if (adCount === 0) {
    adsRemaining.textContent = `Division DLC Unlocked`;
  } else if (adCount === 1) {
    adsRemaining.textContent = `Division DLC - ${adCount} Ad Remaining!`;
  } else {
    adsRemaining.textContent = `Division DLC - ${adCount} Ads Remaining!`;
  }
}
