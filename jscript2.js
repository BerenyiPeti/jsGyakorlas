/* Tömbök */

var tomb = [];
var tomb2 = [1, 2, 3, 4, 5];
var tomb3 = [5];
console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);
console.log(tomb2[0]);

var gyumolcs = ["alma", "körte", "szilva", "narancs", "szőlő", "eper", "ananász"];
var gyumolcsSzin = ["piros", "sárga", "kék", "narancssárga", "zöld", "piros", "sárga"];
var gyumolcsAr = [200, 180, 320, 310, 500, 3000, 1500];

for (let index = 0; index < gyumolcs.length; index++) {
    console.log(gyumolcs[index]);
}

var index = 0;
while (index < gyumolcsSzin.length && !(gyumolcsSzin[index] === "lila")) {
    index++
}

var vaneSarga = index < gyumolcsSzin.length;
console.log(vaneSarga);

index = 0;
var sargaDb = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if (gyumolcsSzin[index] === "sárga") {
        sargaDb++;
    }
}
console.log("sárga gyümölcsök száma: ", sargaDb);

index = 0;
var osszertek = 0;
for (let index = 0; index < gyumolcsAr.length; index++) {
    osszertek += gyumolcsAr[index];
}
console.log("gyümölcsök összértéke:", osszertek);

index = 0;
var pirosDb = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if (gyumolcsSzin[index] === "piros") {
        pirosDb++;
    }
}

if (sargaDb > pirosDb) {
    console.log("sárga gyümölcsből van több");
} else if (pirosDb > sargaDb) {
    console.log("piros gyümölcsből vna több");
} else{
    console.log("ugyan annyi sárga gyümölcs van, mint piros");
}

index = 0;
while (index < gyumolcsAr.length && !(gyumolcsAr[index] < 100)){
    index++;
}

var vaneSzazAlatti = index < gyumolcsAr.length;

if (vaneSzazAlatti){
    console.log("van 100 ft alatti gyümölcs");
} else{
    console.log("nincs 100 ft alatti gyümölcs");
}
