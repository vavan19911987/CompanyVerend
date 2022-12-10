window.addEventListener('DOMContentLoaded', function () {
    "user strict";
    const swiper = new Swiper ('.swiper', {
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




    let form = document.querySelector('.feed-form');
    let formInput = document.querySelectorAll('.input');
    let inputPhone = document.querySelectorAll('.inputPhone');
    let inputEmail = document.querySelectorAll('.inputEmail');



    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    function validateCountry(country) {
        let re = new RegExp('.co$');
        return re.test(String(country).toLowerCase());
    }

    function validatePhone(phone) {
        let re = /^[0-9\s]*$/;
        return re.test(String(phone));
    }

    form.onsubmit = function () {
        let emailVal = inputEmail.value,
            phoneVal = inputPhone.value,
            emptyInputs = Array.from(formInput).filter(input => input.value === '');

        formInput.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');

                // document.querySelector('.input').placeholder = 'Нужный текст';
                let  o =document.querySelectorAll('.input');
                for (let i = 0; i < o.length; i++) {
                    o[i].placeholder = 'Поле обязательно для заполнения';

                }

            } else {
                input.classList.remove('error');
            }
        });

        if (emptyInputs.length !== 0) {
            console.log('inputs not filled');
            return false;
        }

        if(!validateEmail(emailVal)) {
            console.log('email not valid');
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
        }

        if (validateCountry(emailVal)) {
            console.log('email from Columbia');
            inputEmail.classList.add('error');

            return false;
        } else {
            inputEmail.classList.remove('error');
        }

        if (inputPhone.value === validatePhone(phoneVal)) {
            console.log('phone not valid');
            inputPhone.classList.add('error');
            return false;
        } else {
            inputPhone.classList.remove('error');
        }




    };


    let close = document.querySelector('.close');
    let over = document.querySelector('.overlay');
    let connection = document.querySelector('.connection');


    close.addEventListener('click', function () {

        over.style.display = 'none';
        console.log('ok');
    });
    connection.addEventListener('click', function () {
        over.style.display = 'block';
    });







});
