var formButton = document.getElementById('startBtn');
var form = document.getElementById('form');
var cancelBtn = document.getElementById('cancelBtn');
var clearBtn = document.getElementById('clearBtn');
var saveBtn = document.getElementById('saveBtn');
var inputs = form.getElementsByTagName('input');
var deleteBtn = document.getElementById('deleteBtn');
var addProfBtn = document.getElementById('addProfBtn');
var switchProfBtn = document.getElementById('switchProfBtn');
var editProfBtn = document.getElementById('editProfBtn');

/*localStorage.removeItem('names');
localStorage.removeItem('budgets');
localStorage.removeItem('firstName');
localStorage.removeItem('totalBudget');*/

if (localStorage.getItem('firstName')) {
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'flex';
	document.querySelector('#second h1').textContent = 'Welcome back, ' + localStorage.getItem('firstName');
	document.querySelector('#second p').textContent = 'Your Total Budget: ' + localStorage.getItem('totalBudget');
} else {
	document.querySelector('nav').style.display = 'none';
}

formButton.addEventListener('click', function(){
	form.style.display = 'block';
	formButton.style.display = 'none';
	document.querySelector('#first #main form').style.display = 'block';
})

cancelBtn.addEventListener('click', function(){
	clearBtn.click();
	formButton.style.display = 'block';
	document.querySelector('#first #main form').style.display = 'none';
})

clearBtn.addEventListener('click', function(){
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
})

saveBtn.addEventListener('click', function(){
	if (localStorage.getItem('names')) {
		var names = JSON.parse(localStorage.getItem('names'));
		var budgets = JSON.parse(localStorage.getItem('budgets'));
		names.push(inputs[0].value);
		budgets.push(inputs[1].value);
		localStorage.setItem('names', JSON.stringify(names));
		localStorage.setItem('budgets', JSON.stringify(budgets));
	} else {
		var names = [inputs[0].value];
		var budgets = [inputs[1].value];
		localStorage.setItem('names', JSON.stringify(names));
		localStorage.setItem('budgets', JSON.stringify(budgets));
	}
	console.log(names);
	localStorage.setItem('firstName', inputs[0].value);
	localStorage.setItem('totalBudget', inputs[1].value);
	clearBtn.click();
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'flex';
	document.querySelector('#second h1').textContent = 'Welcome ' + localStorage.getItem('firstName');
	document.querySelector('#second p').textContent = 'Your Total Budget: ' + localStorage.getItem('totalBudget');
	localStorage.setItem('budgetItemCar', 0);
	localStorage.setItem('budgetItemHouse', 0);
	localStorage.setItem('budgetItemApartment', 0);
	localStorage.setItem('budgetItemPersonal', 0);
	localStorage.setItem('budgetItemClothes', 0);
	localStorage.setItem('budgetItemFood', 0);
	localStorage.setItem('budgetItemSports', 0);
})

deleteBtn.addEventListener('click', function(){
	var names = JSON.parse(localStorage.getItem('names'));
	var budgets = JSON.parse(localStorage.getItem('budgets'));
	console.log(names);
	for (var i = 0; i < names.length; i++) {
		if (names[i] == localStorage.getItem('firstName') && budgets[i] == localStorage.getItem('totalBudget')) {
			names.splice(i, 1);
			budgets.splice(i, 1);
			localStorage.setItem('names', JSON.stringify(names));
			localStorage.setItem('budgets', JSON.stringify(budgets));
		}
	}
	console.log(names);
	localStorage.removeItem('firstName');
	localStorage.removeItem('totalBudget');
	if (names.length > 0) {
		localStorage.setItem('firstName', names[0]);
		localStorage.setItem('totalBudget', budgets[0]);
		document.location.reload();
	} else {
		localStorage.removeItem('names');
		localStorage.removeItem('budgets');
		document.getElementById('first').style.display = 'flex';
		document.getElementById('second').style.display = 'none';
		document.querySelector('nav').style.display = 'none';
	}
	localStorage.removeItem('budgetItemCar');
	localStorage.removeItem('budgetItemHouse');
	localStorage.removeItem('budgetItemApartment');
	localStorage.removeItem('budgetItemPersonal');
	localStorage.removeItem('budgetItemClothes');
	localStorage.removeItem('budgetItemFood');
	localStorage.removeItem('budgetItemSports');
})

addProfBtn.addEventListener('click', function(){
	document.getElementById('first').style.display = 'flex';
	document.getElementById('second').style.display = 'none';
	formButton.click();
})

switchProfBtn.addEventListener('click', function(){

})