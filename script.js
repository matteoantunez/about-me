const picURI = 'https://dog.ceo/api/breeds/image/random'

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

const grabPic = async() => {
    try {
        const reponse = await fetch(picURI)
        const obj = await reponse.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const pic = obj.message
        return pic
    } catch (error) {console.error(error)}
}

const updateWithPic = async (event) => {
    try {
        document.getElementById('newPic').src = ''
        const pic = await grabPic()
        console.log(pic)
        document.getElementById('newPic').src = pic
    } catch (error) { console.error(error)}
}
