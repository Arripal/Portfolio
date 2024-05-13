const informations = await fetch(
	'https://arripal.github.io/Portfolio/informations.json'
).then((response) => response.json());

const createPageInfos = (informations) => {
	const about = document.querySelector('.about');

	const title = document.createElement('h1');
	title.classList.add('about__title');
	title.innerText = `${informations.title}`;

	const job = document.createElement('h2');
	job.classList.add('about__role');
	job.classList.add('strong-text');
	job.innerText = `${informations.job}`;

	const description = document.createElement('p');
	description.classList.add('about__desc');
	description.innerText = `${informations.description}`;

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

	about.append(title);
	about.append(job);
	about.append(description);
	about.append(div);
};

createPageInfos(informations[0]);
