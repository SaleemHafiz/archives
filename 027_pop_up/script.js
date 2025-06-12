const popupButton = document.querySelector('.popup-button')
const popup = document.querySelector('.popup')
const cross = document.querySelector('.cross')
const mainContent = document.querySelector('.main-content')
const popupContainer = document.querySelector('.popup-container')
const submitButton = document.querySelector('#submit-button')

popupButton.addEventListener('click', (e) => {
    mainContent.classList.add('popup-opened')
    e.stopPropagation()
})
cross.addEventListener('click', (e) => {
    mainContent.classList.remove('popup-opened')
    e.stopPropagation()
})
popupContainer.addEventListener('click', (e) => {
    mainContent.classList.remove('popup-opened')
    e.stopPropagation()
})
popup.addEventListener('click', (e) => {
    e.stopPropagation()
})

