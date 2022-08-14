const wyczysc = document.querySelector('.wyczysc')
const minus = document.querySelector(".minus")
const operator = document.querySelectorAll('.operator')
const liczby = document.querySelectorAll('.liczba')
const rownosc = document.querySelector('.rownosc')
const calculation = document.querySelector('.calculation')

poprzednieDzialanie = ''
aktualneDzialanie = ''

const zaktualizujWynik = function() {
    
    calculation.innerText = aktualneDzialanie
}

const wpiszLiczbe = function(liczba) {
    if(liczba === '.') {
        if(aktualneDzialanie.includes('.')) {
            return
        }
    }
    
    aktualneDzialanie += liczba

}

const usun = function() {
    aktualneDzialanie = ''
    poprzednieDzialanie = ''
}



liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        wpiszLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})
wyczysc.addEventListener('click', () => {
    usun()
    zaktualizujWynik()
})
