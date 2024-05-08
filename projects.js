const projects = await fetch('http://localhost:5501/data/projects.json').then(
	(response) => response.json()
);

const projetCard = (project) => {
	const li = document.createElement('li');
	li.classList.add('list__item');
	li.classList.add('project');
	li.classList.add('card');
	li.style.backgroundImage = `url(${project.image})`;

	const article = document.createElement('article');
	article.classList.add('project__description');

	const description_project = document.createElement('p');
	description_project.innerText = project.description;

	const name = document.createElement('h2');
	name.innerText = `${project.name}`;

	const technos = project.technologies;

	const technologies = document.createElement('ul');
	technologies.classList.add('stack');

	const list_links = document.createElement('nav');
	list_links.classList.add('nav__list-projets');
	const li_link = document.createElement('li');
	li_link.classList.add('nav__list-item');

	const github_link = document.createElement('a');
	github_link.classList.add('link');
	github_link.href = `${project.sourceCode}`;
	github_link.ariaLabel = 'github';
	github_link.innerText = 'Code source';

	list_links.appendChild(github_link);

	if (project.webSite) {
		const project_link = document.createElement('a');
		project_link.classList.add('link');
		project_link.href = project.webSite;
		project_link.ariaLabel = `Site ${project.nom}`;
		project_link.innerText = 'Lien vers le site';
		list_links.appendChild(project_link);
	}
	technos.map((techno) => {
		const li = document.createElement('li');
		const techno_name = techno.split('/icons/')[1].split('.')[0];
		const image = document.createElement('img');
		image.src = `${techno}`;
		image.alt = `Logo ${techno_name}`;
		li.append(image);
		technologies.append(li);
	});
	article.appendChild(name);
	article.appendChild(description_project);
	article.appendChild(list_links);
	article.appendChild(technologies);

	li.appendChild(article);
	return li;
};

projects.map((project) => {
	const liste = document.querySelector('.projects__list');
	liste.append(projetCard(project));
});
