const $musicPlayer = document.getElementById('audio');
const $playBtn = document.getElementById('playBtn');
const $nextBtn = document.getElementById('nextBtn');
const $prevBtn = document.getElementById('prevBtn');


const $listBtn = document.querySelector('.listBtn');
const $container = document.querySelector('.container');
const $listContainer = document.querySelector('.listContainer');

const isListOpen = () => ([...$playBtn.classList].includes('listOpen'));
const setListOpenStatus = (boolean) => {
    if(boolean) {
        $playBtn.classList.remove('listOpen');
        $container.style.width = '400px';
        $listContainer.style.display = 'none';
      } else {
        $container.style.width = '800px';
        $playBtn.classList.add('listOpen');
        $listContainer.style.display = 'block';
      }
    };

    $listBtn.addEventListener('click', () => setListOpenStatus(isListOpen()));