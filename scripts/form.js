const createForm = document.getElementById('form');
const select = document.getElementById('product-name');

const products = [
	{
	  id: 'fc-1888',
	  name: 'flux capacitor',
	  averagerating: 4.5
	},
	{
	  id: 'fc-2050',
	  name: 'power laces',
	  averagerating: 4.7
	},
	{
	  id: 'fs-1987',
	  name: 'time circuits',
	  averagerating: 3.5
	},
	{
	  id: 'ac-2000',
	  name: 'low voltage reactor',
	  averagerating: 3.9
	},
	{
	  id: 'jj-1969',
	  name: 'warp equalizer',
	  averagerating: 5.0
	}
];

select.innerHTML = '<option value="">-- Choose a product --</option>' + products.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
