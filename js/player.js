const $musicPlayer = document.getElementById('audio');
const $playBtn = document.getElementById('playBtn');
const $nextBtn = document.getElementById('nextBtn');
const $prevBtn = document.getElementById('prevBtn');


const $listBtn = document.querySelector('.listBtn');
const $container = document.querySelector('.container');
const $listContainer = document.querySelector('.listContainer');
const setListOpenStatus = (boolean) => {
    if(Boolean) {
        $container.style.width = '400px';
        $listContainer.style.display = 'none';
      } else {
        $container.style.width = '800px';
        $listContainer.style.display = 'block';
      }
    };
// }
