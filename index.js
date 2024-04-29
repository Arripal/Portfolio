const body = document.body;
const btnHamburger = document.querySelector('.fa-bars');

const projets = await fetch('http://localhost:5501/projets/projets.json').then(
	(response) => response.json()
);

const projetCard = (projet) => {
	const li = document.createElement('li');
	li.classList.add('list__item');

	const link = document.createElement('a');
	link.href = `${projet.link}`;

	const div = document.createElement('div');
	div.classList.add('project');
	div.classList.add('card');
	div.style.backgroundImage = `url(${projet.image})`;

	const article = document.createElement('article');
	article.classList.add('project__description');

	const name = document.createElement('h2');
	name.innerText = `${projet.name}`;

	const technos = projet.technologies;

	const technologies = document.createElement('ul');
	technologies.classList.add('stack');

	technos.map((techno) => {
		const li = document.createElement('li');
		const image = document.createElement('img');
		image.src = `${techno}`;
		image.alt = 'logo';
		li.append(image);
		technologies.append(li);
	});
	article.appendChild(name);
	article.appendChild(technologies);

	div.appendChild(article);
	link.appendChild(div);
	li.appendChild(link);
	return li;
};

projets.map((projet) => {
	const liste = document.querySelector('.projects__list');
	liste.append(projetCard(projet));
});

const displayList = () => {
	const navUl = document.querySelector('.nav__list');

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars');
		btnHamburger.classList.add('fa-times');
		navUl.classList.add('display-nav-list');
	} else {
		btnHamburger.classList.remove('fa-times');
		btnHamburger.classList.add('fa-bars');
		navUl.classList.remove('display-nav-list');
	}
};

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');

	if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
};

document.addEventListener('scroll', scrollUp);
