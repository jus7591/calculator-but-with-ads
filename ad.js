const microtransaction = document.querySelector('#microtransaction');
const modal = document.querySelector('.modal');
const link = document.querySelector('#youtube');
const buttonsContainer = document.querySelector('.buttons');
const adsRemaining = document.querySelector('#remaining');
const videos = [
  'https://www.youtube.com/embed/s0brZ8Cinao?si=uCGcEqt4fmfCt7gs',
  'https://www.youtube.com/embed/zSiNGZQueeM?si=bpvKb3dhx3wNcwR5',
  'https://www.youtube.com/embed/wYX_zhlTDr8?si=4Tic_FPJOX1CF6rM',
  'https://www.youtube.com/embed/HqGsT6VM8Vg?si=1M38uxyKH6d_dpwa',
  'https://www.youtube.com/embed/47cAxRX3aDg?si=F7mCVxAS2BYKbkwT',
  'https://www.youtube.com/embed/CVS1UfCfxlU?si=2xAHnnqcK626zXPY',
  'https://www.youtube.com/embed/N5oYdKJEpNo?si=xnUjRqB2_0y_XGQs',
];
let counter = 0;
let adCount = 2;

microtransaction.addEventListener('click', () => {
  modal.showModal();
  adsLeft();
  playYoutubeLink();
});

function playYoutubeLink() {
  const randomNum = Math.floor(Math.random() * 7);
  decideYoutubeVideo(randomNum);

  if (counter === 2) {
    const divisionBtn = document.createElement('button');
    divisionBtn.textContent = '/';
    divisionBtn.classList.add('math');
    buttonsContainer.appendChild(divisionBtn);
    microtransaction.setAttribute('disabled', '');
    microtransaction.classList.add('disabled');
  }
  setTimeout(() => {
    link.src = '';
    modal.close();
  }, 15000);
}

function decideYoutubeVideo(num) {
  counter += 1;
  link.src = videos[num] + '?autoplay=1';
  link.setAttribute('allow', 'autoplay: encrypted-media');
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
