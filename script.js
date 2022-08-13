const liczby = document.querySelectorAll('.liczba')
const operator = document.querySelectorAll('.operator')
const rownosc = document.querySelector('.rownosc')
const usun = document.querySelector('.usun')
const wyczysc = document.querySelectorAll('.wyczysc')
const wynikPoprz = document.querySelector('.poprzednie-dzialanie')
const wynikAktual = document.querySelector('.aktualne-dzialanie')

var aktualDzialanie = ''
var poprzDzialanie = ''
var operacja = undefined

const zaktualizujWynik = () => {
    wynikAktual.innerText = aktualDzialanie
    wynikPoprz.innerText = poprzDzialanie
}

const dodajLiczbe = (liczba) => {
    if (liczba === ".") {
        if (aktualDzialanie.includes(".")) {
            return
        }
    }
    aktualDzialanie = aktualDzialanie.toString() + liczba.toString()

}
const usunLiczbe = () => {
    aktualDzialanie = aktualDzialanie.slice(0, -1)
}


liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})


usun.addEventListener("click", () => {
    usunLiczbe()
    zaktualizujWynik()
})

operator.forEach((operator) => {
    operator.addEventListener("click", () => {
        
    })
})