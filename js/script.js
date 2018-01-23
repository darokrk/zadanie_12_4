// tworzymy zmienna url, ktora bedzie zawierala pelny adres do naszego dowcipu:

var url = 'http://api.icndb.com/jokes/random';

// podpinamy przycisk do nasluchiwania na klikniecie, aby pobieral losowy zart

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
	getJoke();
});

// do zmiennej paragraph przypiszemy element DOM paragrafu, który odpowiada za wyświetlanie dowcipu

var paragraph = document.getElementById('joke');

// implementacja funkcji getJoke()

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}

// pobierze dowcip po zaladowaniu strony bez naciskania w przycisk

window.onload = getJoke;