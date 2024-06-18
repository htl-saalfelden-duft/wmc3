const bulbImage = document.querySelector('#bulbImage')
const body = document.querySelector("body")

function bulb(status) {
    if(status == 'on') {
        bulbImage.src='./images/pic_bulbon.gif'
        showAlert('on', "Die Lampe ist an")
    }
    if(status == 'off') {
        bulbImage.src='./images/pic_bulboff.gif'
        showAlert('off', "Die Lampe ist aus")
    }
}

function showAlert(status, text) {
    const alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('mt-4')

    alert.innerHTML = text
    
    if(status == 'on') {
        alert.classList.add('alert-warning')
    }
    if(status == 'off') {
        alert.classList.add('alert-primary')
    }


    body.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}
