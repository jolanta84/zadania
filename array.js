const obj ={
    country:"Poland",
    city:"Katowice"
}
const arr = [1,"234",2,{name:"Jola", family:"yes"},obj];
console.log(arr[4].country);
console.log(arr[0]=3);
console.log(arr);

//dodanie nowego elementu na końcu

arr.push("ostatni element");
console.log(arr);

//sprawdzenie długości tablicy
console.log("Długość tablicy to: " + arr.length);

//wyzerowanie tablicy
arr.length = 0;
console.log(arr);


arr.push[1];
arr.push[23];
arr.push[54];
arr.push[81];
arr.push[14];
arr.push[234];
arr.push("przedostatni element");
arr.push("ostatni element");
console.log(arr);

//usuniecie z tablicy

delete arr[1];
console.log(arr);

//usuniecie ostatniego elementu z tablicy

arr.pop();
console.log(arr);

//usuniecie pierwszeg0 elementu z tablicy
arr.shift();
console.log(arr);

//usuniecie kilku elementow z tablicy

arr.splice(2,1)
console.log(arr);
//wydobycie fragmentow tablicy i zwrocenie ich jako nowa tablice

console.log(arr.slice(3,5));


//iterowanie po tablicy

//1.sposób

const numbersArrays =[23,543,6,57,54,3,21,23,28,24];

for (let i=0; i<numbersArrays.length;i++){
    console.log("index" + i + ", wartość:" + numbersArrays[i])
}
//2. sposób

for(let item of numbersArrays){
    console.log(item);
}

//wygeneruj 10-elem tablice liczb losowych, a nstepnie wypisz te liczby w konsoli

const randomNumbers = Math.random()*(100-0)+0;
console.log(randomNumbers);


let arrNumbers = [];


for(let i = 0; i<10;i++){
    const randomNumber = Math.floor(Math.random()*(100-0)+0)
    arrNumbers.push(randomNumber)

}


console.log(arrNumbers);



//Zad.2 Utwórz funkcje która przyjmuje tablice liczb i zwraca tylko parzyste

const evenNumbers = arrNumbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); 

function generateArray(){
    const subArr =[];
    for (let i=0; i<10;i++){
        subArr.push(Math.floor(Math.random()*(100)))
    }
    return subArr
    }
function noOdds(arr){
    const subArr = [];
    for(let item of arr){
        item % 2 ==0 ? subArr.push(item) : null
    }
    return subArr
}
    console.log(noOdds(generateArray()));