import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localTime = "videoplayer-current-time"


player.on('timeupdate', throttle(e => {
    localStorage.setItem(localTime,e.seconds)
},1000));

if(localStorage.getItem(localTime) === null) {
    localStorage.setItem(localTime,0)
}
player.setCurrentTime(localStorage.getItem(localTime))
console.log()
