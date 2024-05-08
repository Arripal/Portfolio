const skills = await fetch('http://localhost:5501/data/skills.json').then(
	(response) => response.json()
);

const skillCard = (skills) => {
	const li = document.createElement('li');
	li.classList.add('list__item');

	const div = document.createElement('div');
	div.classList.add('card');
	div.classList.add('service');

	const title = document.createElement('h3');
	title.innerText = `${skills.name}`;

	const servicesList = document.createElement('ul');
	servicesList.classList.add('service__description');

	const services = skills.services;

	services.map((service) => {
		let li = document.createElement('li');
		li.innerText = `${service}`;
		servicesList.appendChild(li);
	});

	const technosList = document.createElement('ul');
	technosList.classList.add('stack');

	const technologies = skills.technologies;

	technologies.map((technologie) => {
		let li = document.createElement('li');
		const image = document.createElement('img');
		image.src = `${technologie}`;
		image.alt = ``;
		li.appendChild(image);
		technosList.appendChild(li);
	});

	div.appendChild(title);
	div.appendChild(servicesList);
	div.appendChild(technosList);
	li.appendChild(div);
	return li;
};

skills.map((skill) => {
	const services__list = document.querySelector('.services__list');
	services__list.append(skillCard(skill));
});
