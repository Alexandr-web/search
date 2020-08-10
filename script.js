'use strict';

window.addEventListener('load', () => {
    let search = document.querySelector('input[type="text"]'),
        list = document.querySelectorAll('ul li');

    search.addEventListener('input', function() {
        let val = this.value.trim().toLowerCase();
        list.forEach(item => {
            if (val) {
                if (item.innerHTML.toLowerCase().search(val) === -1) {
                    item.classList.add('hide')
                } else {
                    item.classList.remove('hide')
                }
            } else {
                item.classList.remove('hide')
            }
        });
    });
});