const $musicPlayer = document.getElementById('audio');
const $playBtn = document.getElementById('playBtn');
const $nextBtn = document.getElementById('nextBtn');
const $prevBtn = document.getElementById('prevBtn');


const $listBtn = document.querySelector('.listBtn');
const $container = document.querySelector('.container');

$listBtn.onclick = function(){
    $listContainer.style.display = 'block'
    $container.style.width = '800px'
}
