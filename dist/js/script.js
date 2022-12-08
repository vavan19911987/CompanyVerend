window.addEventListener('DOMContentLoaded', function () {
    "user strict";
    const swiper = new Swiper('.swiper', {
        loop: true,
        // spaceBetween: 130,
        autoplay: {
            // delay: 4000,
        },
        speed: 500,
        slidesPwgGroup: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });



    document.getElementById('info').onclick = function (e) {
        let target = e.target;
        if (target.className === 'content__leftBar_list') {
            let s = target.getElementsByClassName('content__sublist');
            closeMenu();
            s[0].style.display = 'block';
        }
    };
    document.onclick = function (e) {
        let target = e.target;
        if (target.className !== 'content__leftBar_list' && target.className !== 'content__sublist') {
            closeMenu();
        }
    };

    function closeMenu() {
        let menu = document.getElementById('info');
        let subm = document.getElementsByClassName('content__sublist');
        for ( let i = 0; i < subm.length; i++) {
            subm[i].style.display = 'none';
        }
    }

    // let car = document.querySelector('.carusel__list_item');
    // let list = document.querySelector('.carusel__list');
    // car.addEventListener('click', function () {
    //     car.setAttribute("style", "font-size:18px;color:#444444;");
    // });



    let list = document.querySelector('.carusel');
    list.addEventListener('click', function (e) {
        let targetItem = e.target;
        if (targetItem.className === 'carusel__list_item') {
            font();
            console.log('yes');
            console.log(targetItem);
        }
    });
    function font() {
        let sub = document.getElementsByClassName('carusel__list_item');
        for ( let i = 0; i < sub.length; i++) {
            sub[i].style.fontSize= '18px';
        }
    }


    // font-size: 18px;
    // color: #444444;
    //

    // let list = document.querySelector('.content__leftBar_list');
    // let q = document.querySelector('.list');
    // list.addEventListener('click', function () {
    //     // q.classList.add('active2');
    //     console.log(q);
    //     q.setAttribute("style", "opacity: 1;");
    // });



});
