// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// assigning mainEl to query selector
const mainEl = document.querySelector('main');
// mainEl background color is to --main per css file
mainEl.style.backgroundColor = 'var(--main-bg)';
// mainEl h1
mainEl.innerHTML = '<h1> SEI ROCKS!</h1>'
//adding class
mainEl.classList.add('flex-ctr');
// assigning to get element since id is already added
const topMenuEl = document.getElementById('top-menu');
// setting height to 100%
topMenuEl.style.height = "100%";
// set background color to --top-menu-bg
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//  adding class flex-around
topMenuEl.classList.add('flex-around');
// Iterate over the menuLinks array
menuLinks.forEach(function (link) {
// creating <a> element
const linkEl = document.createElement("a");
// on the new element add an href attribute with its value set to the href property of the "link" object.
linkEl.setAttribute("href", link.href);
// Set the new element's content to the value of the textproperty of the "link" object.
linkEl.textContent = link.text;
// Append the new element to the topMenuElement
topMenuEl.appendChild(linkEl);
  });
