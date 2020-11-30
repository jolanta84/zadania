/////Obiekty/////
const firstNameEmployee="Ola";
const familyNameEmployee="Pisul";
const ageEmployee = "31"; 
const occupationEmployee = "devi";

const employee = {
    firstName: "Jola",
    familyNameEmployee: "Pisulska",
    age: 36,
    occupation: "dev",
    "start salary": 4000,
    introduction: function(){
        return `Pracownik ${this.firstName}, ${this.familyNameEmployee}, w wieku ${this.age}, zatrudniony na stanowisku ${this.occupation} i jego pensja początkowa to ${this["start salary"]}`
    }

}

console.log(employee.firstName);
console.log(employee.introduction());
console.log(employee["start salary"]);

/*Zad.1
wórz funkcje która przyjmuje rozmiary argumentów obiektu i zwraca objętość pudełka

const box = {
    width: 2,
    length: 5,
    height: 1,
    volumeOfBox: function(){
        return this.width * this.length * this.height;
    }
}
console.log(box.volumeOfBox());

const boxSizes = {
    width: 2,
    length: 5,
    height: 1}

    function volumeOfBox(box){
        return 'Objętość ${boxSizes.width * boxSizes.length * boxSizes.height}';
    }

console.log(volumeOfBox(boxSizes));*/

const boxSizes = {
    width: 2,
    length: 5,
    height: 1}

const volumeOfBox = box => `Objetosc: '${boxSizes.width * boxSizes.length * boxSizes.height}`

console.log(volumeOfBox(boxSizes));

//W metodach ow obiektach nie piszemy funkcji strzałkowych 
/*volume:() =>{
    console.log(this)
    this.width * this.length * this.height
}*/

//Napisz funckje ktora przyjmuje dwa parametry: liczbe oraz obiekt z wartosciami min i max sprawdz czy podana liczba zawiera sie w parzedziale <min max>

const myRange= {
    min:4,
    max:22
}

function isInRange(myNumber, range){
return myNumber>=range.min && myNumber <=range.max }

console.log(isInRange(6, myRange));

/*const isInRange = (myNumber,range)=>(myNumber>=range.min && myNumber <=range.max)

console.log(isInRange(1,myRange))*/

//Tablice
