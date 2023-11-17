let tab1 = [67, 31, 17, 6,
    19, 5, 43, 10, 27, 20];
alert(tab1[7])
tab1[4] = 12;
//zad 1.2
let tab2 = new Array(tab1.length);
for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
}
console.log(tab2);
//zad 1.3
let tab3 = new Array(tab1.length);
for (var i = 0; i < tab2.length; i++){
    tab3[i] = tab1[i] + tab2[i];

}
console.log(tab3)
//zad 1.4

tab2.reverse();
console.log(tab2);
//zad 2.1

let wielkosc = prompt("podaj wielkosc");
let tablica = new Array(wielkosc);
for (let i = 0; i < wielkosc; i++){
    tablica[i] = prompt("podaj liczbe");
   
}
console.log(tablica)
//zad 2.2

tablica.sort();
console.log(tablica[0]);
console.log(tablica[tablica.length-1]);
//zad 2.3
let suma = 0;
for(let i = 0; i < wielkosc; i++){
    suma += tablica[i];
}
console.log(suma / wielkosc)
//zad 2.4
let ilosc = 0;
for(let i = 0; i < wielkosc; i++){
    if(tablica[i] == 3){
        ilosc += 1;
    }
}
console.log(ilosc);
//2.6


