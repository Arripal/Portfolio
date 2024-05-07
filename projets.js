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

	const description_projet = document.createElement('p');
	description_projet.innerText = projet.description[0]['competences'];

	const description_probleme = document.createElement('p');
	description_probleme.innerText = projet.description[0]['problematiques'];

	const name = document.createElement('h2');
	name.innerText = `${projet.name}`;

	const technos = projet.technologies;

	const technologies = document.createElement('ul');
	technologies.classList.add('stack');

	const list_links = document.createElement('nav');
	list_links.classList.add('nav__list-projets');
	const li_link = document.createElement('li');
	li_link.classList.add('nav__list-item');

	const github_link = document.createElement('a');
	github_link.classList.add('link');
	github_link.href = `${projet.sourceCode}`;
	github_link.ariaLabel = 'github';
	github_link.innerText = 'Code source';

	list_links.appendChild(github_link);

	if (projet.webSite) {
		const projet_link = document.createElement('a');
		projet_link.classList.add('link');
		projet_link.href = projet.webSite;
		projet_link.ariaLabel = 'site projet';
		projet_link.innerText = 'Lien vers le site';
		list_links.appendChild(projet_link);
	}
	technos.map((techno) => {
		const li = document.createElement('li');
		const image = document.createElement('img');
		image.src = `${techno}`;
		image.alt = 'logo';
		li.append(image);
		technologies.append(li);
	});
	article.appendChild(name);
	article.appendChild(description_projet);
	article.appendChild(description_probleme);
	article.appendChild(list_links);
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
