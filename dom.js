const identifyID_1 = document.getElementById("sample");
console.log(identifyID_1);
const identifyID_2 = document.querySelector("#sample");
console.log(identifyID_2);
const identifyID_3 = document.querySelector(".sampleCl");
console.log(identifyID_3);
const identifyID_4 = document.querySelector("a");
console.log(identifyID_4);
const identifyID_5 = document.querySelectorAll("a");
console.log(identifyID_5);
const identifyID_6 = document.getElementsByTagName("a");
console.log(identifyID_6);
const identifyID_7 = document.getElementsByClassName("sampleCl");
console.log(identifyID_7);
const identifyID_8 = document.querySelector(".container.text");
console.log(identifyID_8);

/////manipulowanie domem
//dodanie klasy bcg
document.getElementById("container").classList.add("bcg");
//usuniecie klasy container z element ID container
document.getElementById("container").classList.remove("container");
//sprawdzenie czy id conteiner posiada klase bcg
console.log(document.getElementById("container").classList.contains("bcg"));
//włączanie-wyłączenie klasy active w elemencie ID hyp
document.getElementById("hyp").classList.toggle("active");
//dodanie kodu html .innerHTML
document.getElementById("sampleTxt").innerHTML="<b>Nowy tekst</b>";
//dodanie kodu TextContent
document.getElementById("sampleTxt").textContent="Nowy tekst";
//dodanie kodu innerText
document.getElementById("sampleTxt").innerText="Nowy tekst";

//zdarzenia

//sposób1
function changeTxt(){
    document.getElementById("sposob1").innetText = "nowy tekst"
}

//sposób2
document.getElementById("sampleBtn").onclick = changeText2

function changeText2(){
    Document.getElementById("sposob2").innerText = "nowy tekst"
}

//sposób 3
document.getElementById("sampleBtn2").addEventListener("click",changeText3)

function changeText3(){
    document.getElementById("sposob3").innerText="nowy tekst";

}

//sposób 4
document.getElementById("sampleBtn3").addEventListener("click",function(){
    document.getElementById("sposob4").innerText="nowy tekst"
})


//zadanie1

const x = 10;
const y = 20;

const add = (a,b)=>a+b
document.getElementById("zad1_sum").innerText = add(x,y);

///zad2.

function sprawdzenie(){
    const check = document.getElementById("age").getAttribute("id")
    console.log(check)
    const age= document.getElementById("age").value ||0;
    console.log(age)
    age>=18 ? alert("pełnoletni")  : alert ("niepełnoletni");
}


//zad3.

document.getElementById("sum").addEventListener("click",sum);

function sum(){
    const num1 = document.getElementById("num1").value);
    const num2 = document.getElementById("num2").value);
    document.getElementById("result").innerText = num1+num2;
    console.log(typeof num1)
}
