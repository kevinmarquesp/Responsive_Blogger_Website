const NavBar = {
	nav: document.querySelector('nav'),
	
	input: document.querySelector('#nav-menu_state'),
	button: document.querySelector('.toggle-menu'),
	
	menu: document.querySelector('.nav-menu'),
	social: document.querySelector('.social')
};




function toggleNavbar() {
	Object.entries(NavBar).forEach((element) => { // Transforma o objeto em um array com arrays.
		const [key, value] = element;	// Cada um desses array tem dois valores.

		if( key !== 'input' ) {
			value.classList.toggle('active');
		}
	});
}


