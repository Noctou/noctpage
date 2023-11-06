const icon1 = document.querySelector('.icon1');

icon1.addEventListener('mouseenter', () => {
    icon1.style.transform = 'scale(1.1)';
    icon1.style.transition = 'transform 0.5s';
    icon1.style.boxShadow = '0 0 20px rgb(65, 65, 65)';
});

icon1.addEventListener('mouseleave', () => {
    icon1.style.transform = 'scale(1)';
    icon1.style.transition = 'transform 0.5s';
    icon1.style.boxShadow = '0 0 10px rgb(65, 65, 65)';
});

icon1.addEventListener('touchstart', () => {
    icon1.classList.add('touching');
    icon1.style.transform = 'scale(1.1)';
    icon1.style.transition = 'transform 0.5s';
    icon1.style.boxShadow = '0 0 20px rgb(65, 65, 65)';
});

icon1.addEventListener('touchend', () => {
    icon1.classList.remove('touching');
    icon1.style.transform = 'scale(1)';
    icon1.style.transition = 'transform 0.5s';
    icon1.style.boxShadow = '0 0 10px rgb(65, 65, 65)';
});

const icon2 = document.querySelector('.icon2');

icon2.addEventListener('mouseenter', () => {
    icon2.style.transform = 'scale(1.1)'; 
    icon2.style.transition = 'transform 0.5s';
    icon2.style.icon2Shadow = '0 0 20px rgb(65, 65, 65)'; 
});

icon2.addEventListener('mouseleave', () => {
    icon2.style.transform = 'scale(1)'; 
    icon2.style.transition = 'transform 0.5s';
    icon2.style.icon2Shadow = '0 0 10px rgb(65, 65, 65)'; 
});

icon2.addEventListener('touchstart', () => {
    icon2.classList.add('touching');
    icon2.style.transform = 'scale(1.1)';
    icon2.style.transition = 'transform 0.5s';
    icon2.style.boxShadow = '0 0 20px rgb(65, 65, 65)';
});

icon2.addEventListener('touchend', () => {
    icon2.classList.remove('touching');
    icon2.style.transform = 'scale(1)';
    icon2.style.transition = 'transform 0.5s';
    icon2.style.boxShadow = '0 0 10px rgb(65, 65, 65)';
});

const icon3 = document.querySelector('.icon3');

icon3.addEventListener('mouseenter', () => {
    icon3.style.transform = 'scale(1.1)'; 
    icon3.style.transition = 'transform 0.5s';
    icon3.style.icon3Shadow = '0 0 20px rgb(65, 65, 65)'; 
});

icon3.addEventListener('mouseleave', () => {
    icon3.style.transform = 'scale(1)'; 
    icon3.style.transition = 'transform 0.5s';
    icon3.style.icon3Shadow = '0 0 10px rgb(65, 65, 65)'; 
});

icon3.addEventListener('touchstart', () => {
    icon3.classList.add('touching');
    icon3.style.transform = 'scale(1.1)';
    icon3.style.transition = 'transform 0.5s';
    icon3.style.boxShadow = '0 0 20px rgb(65, 65, 65)';
});

icon3.addEventListener('touchend', () => {
    icon3.classList.remove('touching');
    icon3.style.transform = 'scale(1)';
    icon3.style.transition = 'transform 0.5s';
    icon3.style.boxShadow = '0 0 10px rgb(65, 65, 65)';
});

const icon4 = document.querySelector('.icon4');

icon4.addEventListener('mouseenter', () => {
    icon4.style.transform = 'scale(1.1)'; 
    icon4.style.transition = 'transform 0.5s';
    icon4.style.icon4Shadow = '0 0 20px rgb(65, 65, 65)'; 
});

icon4.addEventListener('mouseleave', () => {
    icon4.style.transform = 'scale(1)'; 
    icon4.style.transition = 'transform 0.5s';
    icon4.style.icon4Shadow = '0 0 10px rgb(65, 65, 65)'; 
});

icon4.addEventListener('touchstart', () => {
    icon4.classList.add('touching');
    icon4.style.transform = 'scale(1.1)';
    icon4.style.transition = 'transform 0.5s';
    icon4.style.boxShadow = '0 0 20px rgb(65, 65, 65)';
});

icon4.addEventListener('touchend', () => {
    icon4.classList.remove('touching');
    icon4.style.transform = 'scale(1)';
    icon4.style.transition = 'transform 0.5s';
    icon4.style.boxShadow = '0 0 10px rgb(65, 65, 65)';
});