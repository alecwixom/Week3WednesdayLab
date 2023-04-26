document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')


// ADD FUNCTION
function addMovie(event) {
event.preventDefault();
let inputField = document.querySelector('input')

const movie = document.createElement('li')

// Controls for the movie (cross off and delete)
const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie);
movie.appendChild(movieTitle)

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

const list = document.querySelector("ul");
list.appendChild(movie);

inputField.value = ''
}


// DELETE FUNCTION
function deleteMovie(event) {
    message.textContent = `Movie deleted!`

    revealMessage()

    event.target.parentNode.remove();
}


// CROSS OFF FUNCTION
function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }


    revealMessage()
}

/*
Inside this function it messed up the crossOffMovie messages so they only
show up for a second and then won't show up again.
*/

function revealMessage() {
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
