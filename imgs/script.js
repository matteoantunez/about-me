document.querySelector('#calculate').addEventListener('click', function() {
    let previous = parseInt(document.querySelector('#pOdometer').value)
    let cur = parseInt(document.querySelector('#cOdometer').value)
    let tanks = parseInt(document.querySelector('#gasFilled').value)
    let mpg = 0

    mpg = (cur - previous) / tanks
    document.querySelector('#result').innerHTML = mpg
})