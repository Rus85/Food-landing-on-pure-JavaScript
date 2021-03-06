import axios from "axios";

function menuCards() {
    class MenuCard {
        constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.tranfer = 70;
            this.changeToRU();
        }
        changeToRU() {
            this.price = this.price * this.tranfer;
        }
        render() {
            const element = document.createElement("div");
            if (!this.classes.length) {
                this.element = 'menu__item';
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
        <img src=${this.img} alt=${this.altimg}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost"></div>
        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
         `;
            this.parent.append(element);
        }
    }

    // const getResource = async(url) => {
    //     const res = await fetch(url);
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url} status: ${res.status}`);
    //     }

    //     return await res.json();
    // };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });


    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //     <h3 class="menu__item-subtitle">${title}</h3>
    //     <div class="menu__item-descr">${descr}</div>
    //     <div class="menu__item-divider"></div>
    //     <div class="menu__item-price">
    //     <div class="menu__item-cost"></div>
    //     <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //     </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }


    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });


    axios.get('http://localhost:3000/menu')
        .then(data => createCard(data));

    function createCard(data) {
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');

            element.innerHTML = `
            <img src=${img} alt=${altimg}>
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">${descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost"></div>
        <div class="menu__item-total"><span>${price}</span> руб/день</div>
        </div>
            `;

            document.querySelector('.menu .container').append(element);
        });
    }
}

export default menuCards;