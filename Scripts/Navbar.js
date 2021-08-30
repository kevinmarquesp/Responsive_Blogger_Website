const NavBar = {
	nav: document.querySelector('nav'),
	
	input: document.querySelector('#nav-menu_state'),
	button: document.querySelector('.toggle-menu'),
	
	menu: document.querySelector('.nav-menu'),
	social: document.querySelector('.social')
};




function toggleNavbar() {

	// Transforma o objeto em um array com arrays.
	Object.entries(NavBar).forEach((element) => {

		// Cada um desses array tem dois valores.
		const [key, value] = element;

		if( key !== 'input' ) {
			value.classList.toggle('active');
		}

	});

}


