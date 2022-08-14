const wyczysc = document.querySelector('.wyczysc')
const minus = document.querySelector(".minus")
const operators = document.querySelectorAll('.operator')
const liczby = document.querySelectorAll('.liczba')
const rownosc = document.querySelector('.rownosc')
const calculation = document.querySelector('.calculation')

poprzednieDzialanie = ''
aktualneDzialanie = ''
operacja = undefined

const oblicz = function() {
    let dzialanie 
    if(!poprzednieDzialanie || !aktualneDzialanie) {
        return
    }

    const poprzednie = parseFloat(poprzednieDzialanie)
    const aktualne = parseFloat(aktualneDzialanie)


    if(isNaN(poprzednie) || isNaN(aktualne)) {
        return
    }

    switch (operacja) {
        case '+':
            dzialanie = poprzednie + aktualne
            break;
        case '-':
            dzialanie = poprzednie - aktualne
            break;
        case 'x':
            dzialanie = poprzednie * aktualne
            break; 
        case '/':
        if(aktualne === 0) {
            usun()      
            return
        }
            dzialanie = poprzednie / aktualne
            break;  
        case '%':
            dzialanie = poprzednie / 100 * aktualne
            break;
        default:
            return

    }

    aktualneDzialanie = dzialanie
    operacja = undefined
    poprzednieDzialanie = ''

}

const zaktualizujWynik = function() {
    calculation.innerText = aktualneDzialanie
    if(operacja != null) {

    }
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

const del = function() {
    aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)
}

const wybierzOperacje = function(operator) {
    if(aktualneDzialanie === '') {
        return
    }
    if(poprzednieDzialanie !== '') {
        oblicz()
    }
    operacja = operator
    poprzednieDzialanie = aktualneDzialanie
    aktualneDzialanie = ''
    calculation.innerText = poprzednieDzialanie
    

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



operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        wybierzOperacje(operator.innerText)
        
    })
})


rownosc.addEventListener('click', () => {
    oblicz()
    zaktualizujWynik()
})

minus.addEventListener('click', () => {
    del()
    zaktualizujWynik()
})