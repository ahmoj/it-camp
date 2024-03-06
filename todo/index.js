
class Zadaci {
    constructor(opis){
        this.opis = opis    
    }   
}

const zadaci = []
while(true){
let unos = prompt('Izaberi: 1. Unos zadataka, 2. Pregled zadataka, 3. Izmena zadataka, 4. Brisanje zadataka')
if(unos == 1){
    const opis = prompt('Unesi zadatak')
    zadaci.push(new Zadaci(opis))
    localStorage.setItem(zadaci.length - 1, opis)

}
else if(unos == 2){
    console.log(zadaci)
}
else if(unos == 3){
    let id = prompt('Unesi broj zadatka kojeg zelis da izmenis')
    let izmena = prompt('Izmeni zadatak')
    localStorage.setItem(id - 1, izmena)
    zadaci.splice(id - 1, 1, izmena)
}
else if(unos == 4){
    id = prompt('Unesi broj zadatka kojeg zelis da obrises')
    localStorage.removeItem(id - 1)
    zadaci.splice(id - 1, 1)
}
else{
    alert('Ova akcija nijje moguca')
}

}
