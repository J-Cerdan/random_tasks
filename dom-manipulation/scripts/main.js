const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.style.cssText = "color: red";
content.textContent = "Hey I'm red!";

const content2 = document.createElement('h3');
content2.classList.add('content2');
content2.style.cssText = "color: blue";
content2.textContent = "I'm a blue h3!";

const content3 = document.createElement('div');
content3.classList.add('content3');
content3.style.cssText = "border-color: black; border-width: thin; border-style: solid; background-color: pink";
content3.textContent = "test";

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);



const container2 = document.querySelector('.content3');

const divContent = document.createElement('div');
divContent.classList.add('content3.5');
divContent.textContent = "I'm in a div";

const divContent2 = document.createElement('p');
divContent2.classList.add('content3.5.2');
divContent2.textContent = "ME TOO!";

container2.appendChild(divContent);
container2.appendChild(divContent2);


