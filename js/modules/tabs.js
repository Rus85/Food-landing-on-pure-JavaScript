function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    const tabSlider = document.querySelector(".tabcontainer");

    // const width = tabSlider.clientWidth;
    // const heigth = tabSlider.clientHeight;

    // console.log(width, heigth);

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.remove("show", "fade");
            item.classList.add("hide");
        });

        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.remove("hide");
        tabsContent[i].classList.add("show", "fade");
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;