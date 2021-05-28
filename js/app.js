const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'toutchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//-----------------------------LIST WORKS-----------------------------------------

let list = document.querySelectorAll('.list-work');
let itemBox = document.querySelectorAll('.list-item');

list.forEach((n, i) =>
	n.addEventListener('click', () => {
		list.forEach((n) => n.classList.remove('active'));
		n.classList.add('active');
		let datafilter = n.getAttribute('data-filter');
		itemBox.forEach((item) => {
			item.classList.add('hide');

			if (
				item.getAttribute('data-item') === datafilter ||
				datafilter === 'all'
			) {
				item.classList.remove('hide');

				item.classList.add('active');
			}
		});
	})
);

//-----------------------------LIST WORKS-----------------------------------------

