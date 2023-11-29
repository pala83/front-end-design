window.addEventListener('scroll', () => {
    let spider = document.querySelector('.historiaSpider');
    let spiderNegro = document.querySelector('.historiaSpiderNegro');
    let spiderGhost = document.querySelector('.historiaGhost');
    let height = window.innerHeight;
    let posicionTop = spider.getBoundingClientRect().top;
    let posicionBottom = spider.getBoundingClientRect().bottom;

    if (posicionTop - height <= 0 && posicionBottom >= 0) {
        spider.style.animation = 'fadeIn 3s';
        spiderNegro.style.animation = 'fadeIn 5s';
        spiderGhost.style.animation = 'fadeIn 7s';
    } else {
        spider.style.animation = 'none';
        spiderNegro.style.animation = 'none';
        spiderGhost.style.animation = 'none';
    }
});