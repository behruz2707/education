const clients = document.querySelectorAll('.client-image');

const feedback = new Swiper('.client-slider',{
    simulateTouch:false,
    navigation:{
        prevEl:".slider-group .swiper-button-prev",
        nextEl:".slider-group .swiper-button-next",
    }
});
clients[feedback.activeIndex].classList.add('active');

feedback.on('slideChange', function(){
    clients.forEach(function(el){
        el.classList.remove('active');
    });
    clients[feedback.activeIndex].classList.add('active');
});
clients.forEach(function (item, index){
    item.addEventListener('click', function(){
        feedback.slideTo(index, 300);
    });
});

ymaps.ready(init);

function init(){
    const myMap = new ymaps.Map('map',{
        center:[38.858582, 65.792160],
        zoom:10
    });
}



