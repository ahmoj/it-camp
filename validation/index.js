const osoba = {}

let ime = prompt('Unesite ime')

while (ime === '' || ime == null || !isNaN(ime)){
    alert('Morate da uneste ime')
    ime = prompt('Unesite ime')
}

while (ime.length < 3){
    alert('Ime ne moze da bude krace od 3 karaktera...')
    ime = prompt('Unesite ime')
}

osoba.ime = ime


let prezime = prompt('Unesite prezime')

while (prezime === '' || prezime == null || !isNaN(prezime)){
    alert('Morate da uneste prezime')
    prezime = prompt('Unesite prezime')
}

while (prezime.length < 5){
    alert('Prezime ne moze da bude krace od 5 karaktera...')
    prezime = prompt('Unesite prezime')
}

osoba.prezime = prezime

let godine = Number(prompt('Unesite godine'))

while (isNaN(godine) || godine === 0 || godine == null){
    alert('Morate da uneste broj godina...')
    godine = Number(prompt('Unesite godine'))
}

while (godine >= 150){
    alert('Nemozete imati toliko godina...')
    godine = Number(prompt('Unesite godine'))
}

osoba.godine = godine

const hobi = []
let hobiNum = prompt('Koliko imate hobija:')

while (isNaN(hobiNum) || hobiNum < 3 || hobiNum === null){
    alert('Morate da unesete bar 3 hobija...')
    hobiNum = prompt('Koliko imate hobija:')
}

while (hobi.length < hobiNum){
    let hobiInput = prompt('Koji vam je hobi')
    hobi.push(hobiInput)
    while (hobiInput === '' || hobiInput == null || !isNaN(hobiInput)){
        alert('Morate da uneste hobi')
        hobiInput = prompt('Koji vam je hobi')
    }
}

osoba.hobi = hobi

const lokacija = {
    drzava : '',
    grad : '',
}

lokacija.drzava = prompt('Unesi svoju drzavu')

while (lokacija.drzava === '' || lokacija.drzava == null || !isNaN(lokacija.drzava)){
    alert('Morate da uneste drzavu')
    lokacija.drzava = prompt('Unesi svoju drzavu')
}

lokacija.grad = prompt('Unesi svoj grad')

while (lokacija.grad === '' || lokacija.grad == null || !isNaN(lokacija.grad)){
    alert('Morate da unesete grad')
    lokacija.grad = prompt('Unesi svoj grad')
}

osoba.lokacija = lokacija

console.log(osoba);