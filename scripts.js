const imgNames = ['Creepy_Pumpkins.jpg','Fairy_Candles.jpg','Sunset_Moon.jpg','Early_Witchery.jpg','Late_Witchery.jpg','Tall_Candles.jpg','Witch_Paraphernalia.jpg','Witch_Rocks.jpg']

function randomImage(num) {
    const randomNumber = Math.floor(Math.random() * num)
    return imgNames[randomNumber]
}
randomImage(imgNames.length)

const imgSection = document.getElementById('randomimg')

console.log(imgSection)

imgSection.style.backgroundImage = `url('./Images/${randomImage(imgNames.length)}')`