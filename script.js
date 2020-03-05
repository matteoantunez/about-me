window.addEventListener('load', (event) =>{
    if (localStorage.getItem('pOdometer')){
        document.querySelector('#pOdometer').value = localStorage.getItem('pOdometer')
    }
    if (localStorage.getItem('cOdometer')){
        document.querySelector('#cOdometer').value = localStorage.getItem('cOdometer')
    }
    if (localStorage.getItem('gasFilled')){
        document.querySelector('#gasFilled').value = localStorage.getItem('gasFilled')
    }
})

document.querySelector('#calc').addEventListener('click', () => {
    let previous = parseInt(document.querySelector('#pOdometer').value)
    let cur = parseInt(document.querySelector('#cOdometer').value)
    let tanks = parseInt(document.querySelector('#gasFilled').value)
    let mpg = 0

    mpg = (cur - previous) / tanks
    document.querySelector('#result').innerHTML = mpg + "MPG"

    localStorage.setItem('pOdometer', previous)
    localStorage.setItem('cOdometer', cur)
    localStorage.setItem('gasFilled', tanks)
})