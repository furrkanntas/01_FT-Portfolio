document.getElementById('toggleMenu').addEventListener('click', function () {
    var menu = document.getElementById('ftmenu');
    this.classList.toggle('rotate');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');

        setTimeout(function () {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            menu.style.maxWidth = '100%';
        }, 0);
    } else {
        menu.style.maxHeight = '0px';
        menu.style.maxWidth = '0px';
        menu.addEventListener('transitionend', function () {
            menu.classList.add('hidden');
        }, { once: true });
    }
});

document.querySelectorAll('.hoverEffect').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelectorAll('.topicFt, .textFt, .techFt, .buttonFts').forEach(element => {
            element.classList.remove('hidden');
        });
    });
    item.addEventListener('mouseout', () => {
        item.querySelectorAll('.topicFt, .textFt, .techFt, .buttonFts').forEach(element => {
            element.classList.add('hidden');
        });
    });
});