const bio = document.querySelector('.bio')
const button = document.querySelector('#button')

const makeWords = () => {
    bio.textContent = 'Testing'
}

button.addEventListener('click', makeWords)