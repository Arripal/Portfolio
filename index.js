const body = document.body;
const btnMenu = document.querySelector('.fa-bars');

const displayList = () => {
	const navUl = document.querySelector('.nav__list');

	if (btnMenu.classList.contains('fa-bars')) {
		btnMenu.classList.remove('fa-bars');
		btnMenu.classList.add('fa-times');
		navUl.classList.add('display-nav-list');
	} else {
		btnMenu.classList.remove('fa-times');
		btnMenu.classList.add('fa-bars');
		navUl.classList.remove('display-nav-list');
	}
};

btnMenu.addEventListener('click', displayList);

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');

	if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
};

document.addEventListener('scroll', scrollUp);
