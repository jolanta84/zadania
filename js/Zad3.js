let text = prompt("Podaj wynik egzaminu: ");

if (typeof text != "number") {
    text = parseInt(text);
}

switch (text) {
    case 1:
        console.log("Zdałeś egzamin");
        break;
    case 2:
        console.log("Zaliczona tylko teoria");
        break;
    case 3:
        console.log("Zaliczona tylko praktyka");
        break;
    case 0:
       console.log("Egzamin do poprawy");
    default:
        console.log("Nieoczekiwany wyjątek");
        break;
}