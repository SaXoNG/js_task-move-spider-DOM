'use strict';

const spider = document.querySelector('.spider');
const box = document.querySelector('.wall');
const rect = box.getBoundingClientRect();

box.addEventListener('click', (e) => {
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
