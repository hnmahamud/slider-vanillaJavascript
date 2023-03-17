const sliderImg = document.getElementById('slider-img');

let counter = 1;
setInterval(() => {
    counter++;
    sliderImg.setAttribute('src', `images/pic-${counter}.jpg`);
    if(counter === 9) {
        counter = 0;
    }
}, 3000);

const forward = () => {
    if(counter > 0 && counter < 9) {
        counter++;
        sliderImg.setAttribute('src', `images/pic-${counter}.jpg`);
    }
    else {
        counter = 1;
        sliderImg.setAttribute('src', `images/pic-${counter}.jpg`);
    }
}

const backward = () => {
    if(counter >= 2 && counter > 1){
        counter--;
        sliderImg.setAttribute('src', `images/pic-${counter}.jpg`);
    }
    else {
        counter = 9;
        sliderImg.setAttribute('src', `images/pic-${counter}.jpg`);
    }
}