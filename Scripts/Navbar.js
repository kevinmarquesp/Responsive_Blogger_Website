const NavBar = {
	nav: document.querySelector('nav'),
	
	input: document.querySelector('#nav-menu_state'),
	button: document.querySelector('.toggle-menu'),
	
	menu: document.querySelector('.nav-menu'),
	social: document.querySelector('.social')
};




function toggleNavbar() {
	NavBar.nav.classList.toggle('active');
	NavBar.button.classList.toggle('active');
	NavBar.menu.classList.toggle('active');
	NavBar.social.classList.toggle('active');
}
