const card = document.querySelector(".second-main-card");
const card2 = document.querySelector(".second-main-card2");
const card3 = document.querySelector(".second-main-card3");
const cardtoggle = document.querySelector(".second-main-toggle");
const cardtoggle2 = document.querySelector(".second-main-toggle2");
const cardtoggle3 = document.querySelector(".second-main-toggle3");




const plusRed = document.querySelector(".fourth-main-circle-plus");
const plusGray = document.querySelector(".fourth-main-circle-plus2");
const lessYellow = document.querySelector(".fourth-main-circle-less");


cardtoggle.addEventListener('click',() =>{
    document.querySelector('.second-main-card').classList.toggle('active')
    document.querySelector('.second-main-toggle').classList.toggle('rotate')
});

cardtoggle2.addEventListener('click',() =>{
    document.querySelector('.second-main-card2').classList.toggle('active')
    document.querySelector('.second-main-toggle2').classList.toggle('rotate')
});
cardtoggle3.addEventListener('click',() =>{
    document.querySelector('.second-main-card3').classList.toggle('active')
    document.querySelector('.second-main-toggle3').classList.toggle('rotate')

});


plusRed.addEventListener('click',() =>{
    document.querySelector('.fourth-main-circle-center').classList.remove('bgYellow','bgGray')
    document.querySelector('.gray').classList.remove('active')
    document.querySelector('.yellow').classList.remove('active')
    document.querySelector('.red').classList.add('active')
    document.querySelector('.fourth-main-circle-center').classList.add('bgRed')
    document.querySelector('.textColorBlack').classList.add('textColorWhite')
    document.querySelector('.textColorBlack').classList.remove('textColorBlack')
});

plusGray.addEventListener('click',() =>{
    document.querySelector('.fourth-main-circle-center').classList.remove('bgYellow','bgRed')
    document.querySelector('.red').classList.remove('active')
    document.querySelector('.yellow').classList.remove('active')
    document.querySelector('.gray').classList.add('active')
    document.querySelector('.fourth-main-circle-center').classList.add('bgGray')
    document.querySelector('.textColorBlack').classList.add('textColorWhite')
    document.querySelector('.textColorBlack').classList.remove('textColorBlack')

});

lessYellow.addEventListener('click',() =>{
    document.querySelector('.fourth-main-circle-center').classList.remove('bgGray','bgRed')
    document.querySelector('.gray').classList.remove('active')
    document.querySelector('.red').classList.remove('active')
    document.querySelector('.yellow').classList.add('active')
    document.querySelector('.fourth-main-circle-center').classList.add('bgYellow')
    document.querySelector('.textColorWhite').classList.add('textColorBlack')
    document.querySelector('.textColorWhite').classList.remove('textColorWhite')

});






