export const createTechnologiesList = (technologies) => {
	const technosList = document.createElement('ul');
	technosList.classList.add('stack');

	technologies.map((technologie) => {
		const li = document.createElement('li');
		const image = document.createElement('img');
		const technologieName = technologie.split('/icons/')[1].split('.')[0];
		image.src = `${technologie}`;
		image.alt = `Logo ${technologieName}`;
		li.appendChild(image);
		technosList.appendChild(li);
	});

	return technosList;
};

const createServicesList = (services) => {
	const servicesList = document.createElement('ul');
	servicesList.classList.add('service__description');

	services.map((service) => {
		const li = document.createElement('li');
		li.innerText = `${service}`;
		servicesList.appendChild(li);
	});

	return servicesList;
};

const skillCard = (skills) => {
	const li = document.createElement('li');
	li.classList.add('list__item');

	const div = document.createElement('div');
	div.classList.add('card');
	div.classList.add('service');

	const title = document.createElement('h3');
	title.innerText = `${skills.name}`;

	const servicesList = createServicesList(skills.services);

	const technologiesList = createTechnologiesList(skills.technologies);

	div.appendChild(title);
	div.appendChild(servicesList);
	div.appendChild(technologiesList);
	li.appendChild(div);
	return li;
};

const skills = await fetch('https://portfolio-zeta-sandy-33.vercel.app/data/skills.json').then(
	(response) => response.json()
);

skills.map((skill) => {
	const servicesList = document.querySelector('.services__list');
	servicesList.append(skillCard(skill));
});
