const pH = 7;

switch (true) {
    case (pH=> 0):
    case (pH<7):
        console.log("Kwaśna");
        break;
    case(pH == 7):
        console.log("Obojętna");
        break;
    case (pH>7):
    case (pH<=14):
        console.log("Zasadowa");
        break;
    default:
        console.log("Nieoczekiwany wyjątek");
        break;
}