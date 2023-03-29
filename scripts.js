const imgNames = ['Creepy_Pumpkins.jpg','Fairy_Candles.jpg','Sunset_moon.jpg']

console.log(Math.floor(Math.random() * 3))

function randomImage(num) {
    const randomNumber = Math.floor(Math.random() * num)
    return imgNames[randomNumber]
}
randomImage(imgNames.length)


const imgSection = document.getElementById('randomimg')

console.log(imgSection)

imgSection.style.backgroundImage = `url('./Images/${randomImage(imgNames.length)}')`