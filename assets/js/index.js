function classListToggle(item) {
    item.classList.toggle('active');
}
//função para ADICIONAR classlist, que recebe dois parametros: elemento e classe
function classListAdd(item, cc) {
    item.classList.add(cc);
}
//função para REMOVER classlist, que recebe dois parametros: elemento e classe
function classListRemove(item, cc) {
    item.classList.remove(cc);
}

const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');

c1.addEventListener('click', () => {
    const img = document.querySelector('.img');
    const bg = document.querySelector('.bg');
    const text = document.querySelector('.starbucks');
    const btn = document.querySelector('.btn');
    classListAdd(img, 'coffee-one')
    classListRemove(img, 'coffee-two');
    classListRemove(img, 'coffee-three');
    bg.style.backgroundColor = '#026E44';
    text.style.color = '#026E44'
    btn.style.backgroundColor = '#026E44';
    btn.style.transition = '0s';
});

c2.addEventListener('click', () => {
    const img = document.querySelector('.img');
    const bg = document.querySelector('.bg');
    const text = document.querySelector('.starbucks');
    const btn = document.querySelector('.btn');
    classListAdd(img, 'coffee-two');
    classListRemove(img, 'coffee-one');
    classListRemove(img, 'coffee-three');
    bg.style.backgroundColor = '#D66889';
    text.style.color = '#D66889'
    btn.style.backgroundColor = '#D66889';
    btn.style.transition = '0s';
});

c3.addEventListener('click', () => {
    const img = document.querySelector('.img');
    const bg = document.querySelector('.bg');
    const text = document.querySelector('.starbucks');
    const btn = document.querySelector('.btn');
    classListAdd(img, 'coffee-three');
    classListRemove(img, 'coffee-one');
    classListRemove(img, 'coffee-two');
    bg.style.backgroundColor = '#D851B1';
    text.style.color = '#D851B1'
    btn.style.backgroundColor = '#D851B1';
    btn.style.transition = '0s';
});

const btn = document.querySelector('.btn-mobile');

btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    classListToggle(nav);
});