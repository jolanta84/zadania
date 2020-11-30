let number10 = prompt("Podaj liczbę");

if (typeof number10 !== "number") {
    number10 = parseInt(number10);
}

    if ((number10 >= -35) && (number10 < 2))  {

        console.log("Liczba mieści się w przedziale <-35,2)")
    }

    else if ((number10 > 11) && (number10 <= 27)) {
        console.log("Liczba mieści się w przedziale (11,27>");
    }

    else {
        console.log("Liczba nie mieści się w przedziałach <-35,2) oraz (11,27>");

    }