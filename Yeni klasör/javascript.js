console.log("nerhaba dunya")
/* alert("merhaba dünya") */
let firstname="yunus emre"
console.log(firstname)
/* += ++*/
const tckimlik="123456" //degişmez
let fiyat=100
let kdv=0.18
let kdvlifiyat=fiyat*kdv
let toplam=fiyat+kdvlifiyat
console.log("fiyat",  fiyat,
"kdv",  kdv,
"kdvlifiyat",  kdvlifiyat,
"toplam", toplam)
console.log( Math.floor(1.9))//1
console.log( Math.ceil(1.9))//2
console.log( Math.round(1.4))//1
let number="12"
number=parseInt(number)
console.log("number", parseInt(number))
let number2=56
number2= number2.toString();
let email="yunusemredeniz83@gmail.com"
console.log(email.length)
console.log(document.location)
let name="lorem"
function greeting(name=""){
    console.log(`merhaba ${name}`)
}
greeting("apple")
