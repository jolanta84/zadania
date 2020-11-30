let number1 = prompt("Podaj liczbę");

if (typeof number1 !== "number") {
    number1 = parseInt(number1);
}

function even (number1) {
    if (number1 % 2 === 0) {console.log("Podana liczba jest parzysta.");} else {console.log("Podana liczba nie jest parzysta.");};
                                         
    }
even(number1);