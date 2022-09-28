import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    player.on('timeupdate', throttle((data) =>{
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time)
    }, 1000));
    const onTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(onTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                // the id was not a number
                break;
    
            case 'PasswordError':
                // the video is password-protected and the viewer needs to enter the
                // password first
                break;
    
            case 'PrivacyError':
                // the video is password-protected or private
                break;
    
            default:
                // some other error occurred
                break;
        }
    });


