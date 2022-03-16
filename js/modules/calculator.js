function calculator() {
    const result = document.querySelector('.calculating__result span');

    let sex, ratio, weight, heigth, age;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = '1.375';
        localStorage.setItem('ratio', '1.375');
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });

    }


    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');



    function calctotal() {
        if (!sex || !weight || !heigth || !age || !ratio) {
            result.textContent = '_____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * heigth) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round(((13.4 * weight) + (4.8 * heigth) - (5.7 * age)) * ratio);
        }
    }


    calctotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);
                calctotal();
            });
        });

    }


    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    function getDynamicInformation(selector) {

        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            // switch (input.getAttribute('id')) {
            //     case 'heigth':
            //         heigth = +input.value;
            //         break;
            //     case 'weight':
            //         weight = +input.value;
            //         break;
            //     case 'age':
            //         age = +input.value;
            //         break;
            // }

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            if (input.getAttribute('id')) {
                heigth = +input.value;
                weight = +input.value;
                age = +input.value;
            }
            calctotal();
        });
    }

    getDynamicInformation('#heigth');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

export default calculator;