import { createTechnologiesList } from './skills.js';

const createListItem = (image) => {
	const li = document.createElement('li');
	li.classList.add('list__item');
	li.classList.add('project');
	li.classList.add('card');
	li.style.backgroundImage = `url(${image})`;

	return li;
};

const createProjectLink = () => {
	const link = document.createElement('a');
	link.classList.add('link');
	link.target = '_blank';
	return link;
};

const createProjectLinksNav = (project) => {
	const listLinks = document.createElement('nav');
	listLinks.classList.add('nav__list-projets');

	const githubLink = createProjectLink();
	githubLink.href = `${project.sourceCode}`;
	githubLink.ariaLabel = 'github';
	githubLink.innerText = 'Code source';

	listLinks.appendChild(githubLink);

	if (project.webSite) {
		const projectLink = createProjectLink();
		projectLink.href = project.webSite;
		projectLink.ariaLabel = `Site ${project.nom}`;
		projectLink.innerText = 'Lien vers le site';
		listLinks.appendChild(projectLink);
	}
	return listLinks;
};

const createProjetCard = (project) => {
	const listItem = createListItem(project.image);

	const article = document.createElement('article');
	article.classList.add('project__description');

	const descriptionProject = document.createElement('p');
	descriptionProject.innerText = project.description;

	const projectName = document.createElement('h2');
	projectName.innerText = `${project.name}`;

	const technologiesList = createTechnologiesList(project.technologies);

	const listLinks = createProjectLinksNav(project);

	article.appendChild(projectName);
	article.appendChild(descriptionProject);
	article.appendChild(listLinks);
	article.appendChild(technologiesList);

	listItem.appendChild(article);
	return listItem;
};

const projects = await fetch('https://portfolio-zeta-sandy-33.vercel.app/data/projects.json').then(
	(response) => response.json()
);

projects.map((project) => {
	const liste = document.querySelector('.projects__list');
	liste.append(createProjetCard(project));
});
