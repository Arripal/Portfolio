const competences = await fetch(
	'http://localhost:5501/data/competences.json'
).then((response) => response.json());

const competenceCard = (competences) => {
	const li = document.createElement('li');
	li.classList.add('list__item');

	const div = document.createElement('div');
	div.classList.add('card');
	div.classList.add('service');

	const title = document.createElement('h3');
	title.innerText = `${competences.name}`;

	const listeServices = document.createElement('ul');
	listeServices.classList.add('service__description');

	const services = competences.services;

	services.map((service) => {
		let li = document.createElement('li');
		li.innerText = `${service}`;
		listeServices.appendChild(li);
	});

	const listeTechnologies = document.createElement('ul');
	listeTechnologies.classList.add('stack');

	const technologies = competences.technologies;

	technologies.map((technologie) => {
		let li = document.createElement('li');
		const image = document.createElement('img');
		image.src = `${technologie}`;
		image.alt = ``;
		li.appendChild(image);
		listeTechnologies.appendChild(li);
	});

	div.appendChild(title);
	div.appendChild(listeServices);
	div.appendChild(listeTechnologies);
	li.appendChild(div);
	return li;
};

competences.map((competence) => {
	const services__list = document.querySelector('.services__list');
	services__list.append(competenceCard(competence));
});
