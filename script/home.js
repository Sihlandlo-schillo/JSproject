const footer = document.createElement('footer');


footer.innerHTML = 'FASHIONSCENE ©2024 | All Rights Reserved';

footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '10px 0';

footer.classList.add('homeFooter');

document.body.appendChild(footer);