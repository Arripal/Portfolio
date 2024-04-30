const projets = await fetch('http://localhost:5501/data/projets.json').then(
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

	const description = document.createElement('p');
	description.innerText = projet.description;

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
	article.appendChild(description);
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
