const dropDown = document.querySelector('.menu-list')
const hamburger = document.querySelector('.label')
console.log(hamburger)

dropDown.style.display = 'none'

let tracker = false

hamburger.addEventListener('click', (e) => {
    tracker = !tracker
    if(tracker) {
    dropDown.style.display = ''
    } else {
        dropDown.style.display = 'none'
    }
})