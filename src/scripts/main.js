'use strict';

const spider = document.querySelector('.spider');

spider.style.position = 'absolute';

const box = document.querySelector('.wall');

box.addEventListener('click', (e) => {
  const rect = box.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
