const informations = await fetch(
	'http://localhost:5501/data/informations.json'
).then((response) => response.json());

const pageInfos = (informations) => {
	const a_propos = document.querySelector('.about');

	const title = document.createElement('h1');
	title.classList.add('about__title');
	title.innerText = `${informations.title}`;

	const metier = document.createElement('h2');
	metier.classList.add('about__role');
	metier.classList.add('strong-text');
	metier.innerText = `${informations.metier}`;

	const paragraphe = document.createElement('p');
	paragraphe.classList.add('about__desc');
	paragraphe.innerText = `${informations.description}`;

	const div = document.createElement('div');
	div.classList.add('about__contact');
	div.classList.add('center');

	const link = document.createElement('a');
	link.href = '#contact';

	const span = document.createElement('span');
	span.classList.add('btn');
	span.classList.add('btn--outline');

	span.innerText = 'Me contacter';

	link.appendChild(span);
	div.appendChild(link);

	a_propos.append(title);
	a_propos.append(metier);
	a_propos.append(paragraphe);
	a_propos.append(div);
};

pageInfos(informations[0]);
