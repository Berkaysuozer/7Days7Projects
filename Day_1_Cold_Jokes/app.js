const JOKEDOM = document.getElementById('joke');
const JOKEBUTTON = document.getElementById('jokebutton');
//async function
async function fetchJokes() {
    const response = await fetch('http://localhost:3000/jokes');
    const data = await response.json();
    let random = Math.floor(Math.random() * data.length)
    JOKEDOM.innerHTML = data[random].text;

}

JOKEBUTTON.addEventListener("click", fetchJokes);


