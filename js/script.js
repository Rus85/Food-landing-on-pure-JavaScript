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
});