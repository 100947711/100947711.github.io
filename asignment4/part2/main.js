const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic2.jpg' : 'Closeup of a human eye',
  'pic3.jpg' : 'Rock that looks like a wave',
  'pic4.jpg' : 'Purple and white pansies',
  'pic1.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for (const image of images) {
	const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}');
	newImage.setAttribute('alt', alts[image]);
	thumbBar.appendChild(newImage);
	newImage.addEventListener('click', e => {
		displayedImage.src = e.target.src;
		displayedImage.alt = e.target.alt;
	});
}
/* Wiring up the Darken/Lighten button */
