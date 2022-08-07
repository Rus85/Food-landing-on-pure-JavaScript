import calculator from '../js/modules/calculator';
import cards from '../js/modules/cards';
import forms from '../js/modules/forms';
import modal from '../js/modules/modal';
import slider from '../js/modules/slider';
import tabs from '../js/modules/tabs';
import timer from '../js/modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    calculator();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal');
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-09-01');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevSlide: '.offer__slider-prev',
        nextSlide: '.offer__slider-next',
        currentSlide: '#current',
        totalSlides: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });





    // // Tabs

    // const tabs = document.querySelectorAll('.tabheader__item'),
    //     tabsContent = document.querySelectorAll('.tabcontent'),
    //     tabsParent = document.querySelector('.tabheader__items');

    // const tabSlider = document.querySelector('.tabcontainer');

    // // const width = tabSlider.clientWidth;
    // // const heigth = tabSlider.clientHeight;

    // // console.log(width, heigth);

    // function hideTabsContent() {
    //     tabsContent.forEach((item) => {
    //         item.classList.remove('show', 'fade');
    //         item.classList.add('hide');
    //     });

    //     tabs.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }

    // function showTabsContent(i = 0) {
    //     tabsContent[i].classList.remove('hide');
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabs[i].classList.add('tabheader__item_active');
    // }

    // hideTabsContent();
    // showTabsContent();

    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item) {
    //                 hideTabsContent();
    //                 showTabsContent(i);
    //             }
    //         });
    //     }
    // });

    // // Timer

    // const deadline = '2022-03-01';

    // function getTimeRemaining(endtime) {
    //     const t = Date.parse(endtime) - Date.parse(new Date()),
    //         days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    //         minutes = Math.floor((t / 1000 / 60) % 60),
    //         seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         total: t,
    //         days: days,
    //         hours: hours,
    //         minutes: minutes,
    //         seconds: seconds,
    //     };
    // }

    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);

    // // Modal

    // const modalTrigger = document.querySelectorAll('[data-modal]'),
    //     modal = document.querySelector('.modal');


    // function openModal() {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    //     clearInterval(modalTimerId);
    // }

    // modalTrigger.forEach((btn) => {
    //     btn.addEventListener('click', openModal);
    // });

    // function closeModal() {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // }


    // modal.addEventListener('click', (e) => {
    //     if (e.target === modal || e.target.getAttribute('data-close') == '') {
    //         closeModal();
    //     }
    // });

    // document.addEventListener('keydown', (e) => {
    //     if (e.code === 'Escape' && modal.classList.contains('show')) {
    //         closeModal();
    //     }
    // });

    // const modalTimerId = setTimeout(openModal, 50000);

    // function showModalByScroll() {
    //     if (
    //         window.pageYOffset + document.documentElement.clientHeight >=
    //         document.documentElement.scrollHeight - 1
    //     ) {
    //         openModal();
    //         window.removeEventListener('scroll', showModalByScroll);
    //     }
    // }

    // window.addEventListener('scroll', showModalByScroll);

    // // Menu cards

    // class MenuCard {
    //     constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
    //         this.img = img;
    //         this.altimg = altimg;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //         this.tranfer = 27;
    //         this.changeToUAH();
    //     }
    //     changeToUAH() {
    //         this.price = this.price * this.tranfer;
    //     }
    //     render() {
    //         const element = document.createElement('div');
    //         if (!this.classes.length) {
    //             this.element = 'menu__item';
    //         } else {
    //             this.classes.forEach(className => element.classList.add(className));
    //         }
    //         element.innerHTML = `
    //     <img src=${this.img} alt=${this.altimg}>
    //     <h3 class='menu__item-subtitle'>${this.title}</h3>
    //     <div class='menu__item-descr'>${this.descr}</div>
    //     <div class='menu__item-divider'></div>
    //     <div class='menu__item-price'>
    //     <div class='menu__item-cost'></div>
    //     <div class='menu__item-total'><span>${this.price}</span> грн/день</div>
    //     </div>
    //      `;
    //         this.parent.append(element);
    //     }
    // }

    // // const getResource = async(url) => {
    // //     const res = await fetch(url);
    // //     if (!res.ok) {
    // //         throw new Error(`Could not fetch ${url} status: ${res.status}`);
    // //     }

    // //     return await res.json();
    // // };

    // // getResource('http://localhost:3000/menu')
    // //     .then(data => {
    // //         data.forEach(({ img, altimg, title, descr, price }) => {
    // //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    // //         });
    // //     });


    // // getResource('http://localhost:3000/menu')
    // //     .then(data => createCard(data));

    // // function createCard(data) {
    // //     data.forEach(({ img, altimg, title, descr, price }) => {
    // //         const element = document.createElement('div');
    // //         element.classList.add('menu__item');

    // //         element.innerHTML = `
    // //         <img src=${img} alt=${altimg}>
    // //     <h3 class='menu__item-subtitle'>${title}</h3>
    // //     <div class='menu__item-descr'>${descr}</div>
    // //     <div class='menu__item-divider'></div>
    // //     <div class='menu__item-price'>
    // //     <div class='menu__item-cost'></div>
    // //     <div class='menu__item-total'><span>${price}</span> грн/день</div>
    // //     </div>
    // //         `;

    // //         document.querySelector('.menu .container').append(element);
    // //     });
    // // }


    // // axios.get('http://localhost:3000/menu')
    // //     .then(data => {
    // //         data.data.forEach(({ img, altimg, title, descr, price }) => {
    // //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    // //         });
    // //     });


    // axios.get('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //     <h3 class='menu__item-subtitle'>${title}</h3>
    //     <div class='menu__item-descr'>${descr}</div>
    //     <div class='menu__item-divider'></div>
    //     <div class='menu__item-price'>
    //     <div class='menu__item-cost'></div>
    //     <div class='menu__item-total'><span>${price}</span> грн/день</div>
    //     </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }


    // // Forms

    // const forms = document.querySelectorAll('form');

    // forms.forEach(item => {
    //     bindPostData(item);
    // });

    // const postData = async(url, data) => {
    //     const res = await fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: data
    //     });

    //     return await res.json();
    // };

    // const messages = {
    //     good: 'Мы перезвоним Вам',
    //     loading: 'img/form/spinner.svg',
    //     faiure: 'Что-то пошло не так'
    // };

    // function bindPostData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const statusMessage = document.createElement('img');
    //         statusMessage.src = messages.loading;
    //         statusMessage.style.cssText = `
    //             display: block;
    //             margin: 0 auto;
    //         `;
    //         form.insertAdjacentElement('afterend', statusMessage);

    //         // const request = new XMLHttpRequest();

    //         // request.open('POST', 'server.php');

    //         // request.setRequestHeader('Content-type', 'application/json');
    //         const formData = new FormData(form);

    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));

    //         // const json = JSON.stringify(object);

    //         // request.send(json);

    //         postData('http://localhost:3000/requests', json)
    //             .then((data) => {
    //                 console.log(data);
    //                 showThanksModal(messages.good);
    //                 statusMessage.remove();
    //             })
    //             .catch(() => {
    //                 showThanksModal(messages.faiure);
    //             })
    //             .finally(() => {
    //                 form.reset();
    //             });

    //         // request.addEventListener('load', () => {
    //         //     if (request.status === 200) {
    //         //         console.log(request.response);
    //         //         showThanksModal(messages.good);
    //         //         form.reset();
    //         //         statusMessage.remove();
    //         //     } else {
    //         //         showThanksModal(messages.faiure);
    //         //     }
    //         // });

    //     });
    // }

    // function showThanksModal(messages) {
    //     const prevModalDialog = document.querySelector('.modal__dialog');

    //     prevModalDialog.classList.add('hide');
    //     openModal();

    //     const thanksModal = document.createElement('div');
    //     thanksModal.classList.add('modal__dialog');
    //     thanksModal.innerHTML = `
    //         <div class='modal__content'>
    //         <div class='modal__close' data-close>&times</div>
    //         <div class='modal__title'>${messages}</div>
    //     `;

    //     document.querySelector('.modal').append(thanksModal);
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         prevModalDialog.classList.add('show');
    //         prevModalDialog.classList.remove('hide');
    //         closeModal();
    //     }, 3000);

    // }



    // // Slider


    // // Second slider


    // const slides = document.querySelectorAll('.offer__slide'),
    //     slider = document.querySelector('.offer__slider'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current'),
    //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    //     slidesField = document.querySelector('.offer__slider-inner'),
    //     width = window.getComputedStyle(slidesWrapper).width;

    // let slideIndex = 1;
    // let offset = 0;

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;

    // }


    // slidesField.style.width = 100 * slides.length + '%';
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';

    // slidesWrapper.style.overflow = 'hidden';

    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });

    // slider.style.position = 'relative';

    // const indicators = document.createElement('ol'),
    //     dots = [];
    // indicators.classList.add('carousel-indicators');

    // slider.append(indicators);

    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement('li');
    //     dot.setAttribute('data-slide-to', i + 1);
    //     dot.classList.add('dot');

    //     if (i == 0) {
    //         dot.style.opacity = 1;
    //     }

    //     indicators.append(dot);
    //     dots.push(dot);

    // }


    // function dotsFunc() {
    //     dots.forEach(dot => dot.style.opacity = '.5');
    //     dots[slideIndex - 1].style.opacity = 1;
    // }

    // function deletePx(str) {
    //     return +str.replace(/\D/g, '');
    // }


    // next.addEventListener('click', () => {
    //     if (offset == deletePx(width) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += deletePx(width);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }

    //     dotsFunc();
    // });

    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = deletePx(width) * (slides.length - 1);
    //     } else {
    //         offset -= deletePx(width);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }

    //     dotsFunc();
    // });

    // dots.forEach(dot => {
    //     dot.addEventListener('click', (e) => {
    //         const slideTo = e.target.getAttribute('data-slide-to');

    //         slideIndex = slideTo;
    //         offset = deletePx(width) * (slideTo - 1);

    //         slidesField.style.transform = `translateX(-${offset}px)`;

    //         if (slides.length < 10) {
    //             current.textContent = `0${slideIndex}`;
    //         } else {
    //             current.textContent = slideIndex;
    //         }

    //         dotsFunc();
    //     });
    // });



    // // First slider

    // // if (showSlides.length > 10) {
    // //     total.textContent = `0${slides.length}`;
    // // } else {
    // //     total.textContent = slides.length;
    // // }

    // // function showSlides(n) {
    // //     if (n > slides.length) {
    // //         slideIndex = 1;
    // //     }

    // //     if (n < 1) {
    // //         slideIndex = slides.length;
    // //     }

    // //     slides.forEach(item => item.style.display = 'none');

    // //     slides[slideIndex - 1].style.display = 'block';

    // //     if (showSlides.length < 10) {
    // //         current.textContent = `0${slideIndex}`;
    // //     } else {
    // //         current.textContent = slideIndex;
    // //     }

    // // }

    // // function plusSlide(n) {
    // //     showSlides(slideIndex += n);
    // // }

    // // prev.addEventListener('click', () => {
    // //     plusSlide(-1);
    // // });

    // // next.addEventListener('click', () => {
    // //     plusSlide(1);
    // // });

    // // showSlides(slideIndex);



    // // Calculator


    // const result = document.querySelector('.calculating__result span');

    // let sex, ratio, weight, heigth, age;

    // if (localStorage.getItem('sex')) {
    //     sex = localStorage.getItem('sex');
    // } else {
    //     sex = 'female';
    //     localStorage.setItem('sex', 'female');
    // }

    // if (localStorage.getItem('ratio')) {
    //     ratio = localStorage.getItem('ratio');
    // } else {
    //     ratio = '1.375';
    //     localStorage.setItem('ratio', '1.375');
    // }

    // function initLocalSettings(selector, activeClass) {
    //     const elements = document.querySelectorAll(selector);

    //     elements.forEach(elem => {
    //         elem.classList.remove(activeClass);
    //         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
    //             elem.classList.add(activeClass);
    //         }

    //         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
    //             elem.classList.add(activeClass);
    //         }
    //     });

    // }


    // initLocalSettings('#gender div', 'calculating__choose-item_active');
    // initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');



    // function calctotal() {
    //     if (!sex || !weight || !heigth || !age || !ratio) {
    //         result.textContent = '_____';
    //         return;
    //     }

    //     if (sex === 'female') {
    //         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * heigth) - (4.3 * age)) * ratio);
    //     } else {
    //         result.textContent = Math.round(((13.4 * weight) + (4.8 * heigth) - (5.7 * age)) * ratio);
    //     }
    // }


    // calctotal();

    // function getStaticInformation(selector, activeClass) {
    //     const elements = document.querySelectorAll(selector);

    //     elements.forEach(elem => {
    //         elem.addEventListener('click', (e) => {
    //             if (e.target.getAttribute('data-ratio')) {
    //                 ratio = +e.target.getAttribute('data-ratio');
    //                 localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
    //             } else {
    //                 sex = e.target.getAttribute('id');
    //                 localStorage.setItem('sex', e.target.getAttribute('id'));
    //             }

    //             elements.forEach(elem => {
    //                 elem.classList.remove(activeClass);
    //             });

    //             e.target.classList.add(activeClass);
    //             calctotal();
    //         });
    //     });

    // }


    // getStaticInformation('#gender div', 'calculating__choose-item_active');
    // getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    // function getDynamicInformation(selector) {

    //     const input = document.querySelector(selector);

    //     input.addEventListener('input', () => {
    //         // switch (input.getAttribute('id')) {
    //         //     case 'heigth':
    //         //         heigth = +input.value;
    //         //         break;
    //         //     case 'weight':
    //         //         weight = +input.value;
    //         //         break;
    //         //     case 'age':
    //         //         age = +input.value;
    //         //         break;
    //         // }

    //         if (input.value.match(/\D/g)) {
    //             input.style.border = '1px solid red';
    //         } else {
    //             input.style.border = 'none';
    //         }

    //         if (input.getAttribute('id')) {
    //             heigth = +input.value;
    //             weight = +input.value;
    //             age = +input.value;
    //         }
    //         calctotal();
    //     });
    // }

    // getDynamicInformation('#heigth');
    // getDynamicInformation('#weight');
    // getDynamicInformation('#age');

});