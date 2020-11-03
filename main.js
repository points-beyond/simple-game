const $btn = document.getElementById('btn-kick')
const $btn2 = document.getElementById('btn-kick2')

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHP: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click', function() {
	console.log('Kick')
	changeHP(random(20), character)
	changeHP(random(20), enemy)
})

$btn2.addEventListener('click', () => {
	console.log('Kick')
	changeHP(random(50), character)
	changeHP(random(50), enemy)
})

function init() {
	console.log('Start Game')
	// renderHPLife(character)
	
}


function changeHP(count, person) {
	if (person.damageHP < count) {
		person.damageHP = 0
		alert(`${person.name} lost!`)
		$btn.disabled = true
	} else {
		person.damageHP -= count
		person.elHP.innerText = `${person.damageHP} / ${person.defaultHP} `
		person.elProgressbar.style.width = person.damageHP + '%'
	}
}

function random(num) {
	return Math.ceil(Math.random() * num)
}


init()